import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal
                        visible={this.state.visible}
                        width="400"
                        height="584"
                        effect="fadeInUp"
                        onClickAway={() => this.closeModal()}
                    >
                        <div className="mt-5 p-3 popup_wrapper">


                            <div className="row mx-auto mb-2">

                                <button className="btn btn-lg btn-block btn-outline popup-button text">Continue with phone</button>

                            </div>

                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button ">Continue with facebook</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button">Continue with google</button>
                                
                            </div>
                            <div className="row mx-auto mb-2">
                                
                                <button className="btn btn-lg btn-block btn-outline popup-button">Continue with email</button>
                                
                            </div>

                            <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                        </div>
                    </Modal>
            </section>
        );
    }
}