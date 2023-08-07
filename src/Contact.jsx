import './contact.css'

function Contact() {
    return (
        <div className='contact' id="contactComponent">
            <h2>Let&apos;s Connect</h2>
            <form action="submit" method='post'>
                <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                <button type='submit' className='submit'> Submit </button>
            </form>
        </div>
    )
}

export default Contact;