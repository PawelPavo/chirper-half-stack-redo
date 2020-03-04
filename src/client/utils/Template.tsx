import * as React from 'react';

class Template extends React.Component<TemplateProps, TemplateState> {
    constructor (props: TemplateProps){
        super(props);
        this.state ={};
    }


    render() {
        return (
            <div>
                <h1 className="text-center">Template Page</h1>

            </div>
        )
    }
}

interface TemplateProps{}
interface TemplateState{}

export default Template;