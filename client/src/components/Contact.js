import React from 'react'

export function Contact() {
    return (
        <div className='ContactPage'>
            <form>
                <label for="name">Name:</label><br />
                <input type="text" id="name" name="name" /><br />
                <label for="email">Email:</label><br />
                <input type="email" id="email" name="email" /><br />
                <label for="reason">Contact Reason:</label><br />
                <textarea id="reason" name="reason" rows="5" cols="40"></textarea><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
