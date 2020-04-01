import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="title">
                <h1 className="title-text">
                    Contact Us
                </h1>
            </div>

            <form className="card m-2 p-4" action="https://submit-form.com/lnTo0X50PLXMCF2bTQjoz"  method="POST">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name="email" placeholder="Email"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" name="name" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Message</label>
                    <textarea type="text" class="form-control" name="message" id="exampleInputPassword1" placeholder="Enter your message....."/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            
        </div>
    );
}
 
export default Contact;