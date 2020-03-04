import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom'
import { FaUser, FaCommentDots, FaUndoAlt, FaPaperPlane } from 'react-icons/fa'



class NewChirp extends React.Component<NewChirpProps, NewChirpState> {
    constructor(props: NewChirpProps) {
        super(props);
        this.state = {
            user: '',
            text: ''
        };
    }

    async handleClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        await fetch('api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: this.state.user, text: this.state.text })
        });
        this.setState({ user: '', text: '' });
        this.props.history.replace('/');
    }

    render() {
        return (
            <div >
                <ul className="d-flex justify-content-between shadow-lg sticky-top bg-white">
                    <h4 className="text-monospace m-3">Create New Chirp</h4>
                    <Link className="btn btn-success m-3" to="/"><FaUndoAlt/> Back</Link>
                </ul>
                <div className="d-flex justify-content-center my-5">
                    <div className="col-8 shadow">
                        <h4 className="text-textSpecial mt-3"><FaUser /> Enter Your Name</h4>
                        <input type="text" className="form-control" aria-describedby="basic-addon1"
                            value={this.state.user}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ user: e.target.value })}
                        />
                        <h4 className="mt-5 text-textSpecial"><FaCommentDots /> Enter Your Chirp</h4>
                        <input type="text" className="form-control" aria-describedby="basic-addon1"
                            value={this.state.text}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ text: e.target.value })}
                        />
                        <div className="col card-footer d-flex justify-content-end mt-5 mb-5 shadow">
                        <button className="btn btn-outline-success btn-lg" onClick={(e) => this.handleClick(e)}> <FaPaperPlane/> Post Chirp</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface NewChirpProps extends RouteComponentProps<{ id: string }> { }
interface NewChirpState {
    user: string;
    text: string;
}

export default NewChirp;