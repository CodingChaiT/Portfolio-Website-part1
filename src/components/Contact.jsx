// Importing React and useState hook for managing component state 
import React, { useState } from "react";

function Contact() {
    // State to manage the form data entered by the user 
    const [formData, setFormData] = useState({
        myName: "",
        myEmail: "",
        myReason: "",
        myComments: "",
    });

    // State to store the server's response message 
    const [responseMessage, setResponseMessage] = useState("");

    // Handler to update the formData state when user changes any input field 
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handler to process form submission 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/submit-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setResponseMessage(` 
                ${data.message}  
                Here is the data you submitted: 
                - Name: ${data.receivedData.name} 
                - Email: ${data.receivedData.email} 
                - Reason: ${data.receivedData.reason} 
                - Comments: ${data.receivedData.comments} 
            `);

                setFormData({
                    myName: "",
                    myEmail: "",
                    myReason: "",
                    myComments: "",
                });
            } else {
                setResponseMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("Failed to submit the form. Try again later.");
        }
    };

    return (
        <main>
            <h2>Contact Chai</h2>
            <p>Fill out the form below to get in touch. All information is required.</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="myName">Name:</label>
                <input
                    type="text"
                    id="myName"
                    name="myName"
                    value={formData.myName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="myEmail">E-mail:</label>
                <input
                    type="email"
                    id="myEmail"
                    name="myEmail"
                    value={formData.myEmail}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="myReason">Reason for Contact:</label>
                <input
                    type="text"
                    id="myReason"
                    name="myReason"
                    list="reasons"
                    value={formData.myReason}
                    onChange={handleChange}
                    required
                />
                <datalist id="reasons">
                    <option value="Collaboration" />
                    <option value="Freelance Inquiry" />
                    <option value="Networking" />
                    <option value="Feedback" />
                    <option value="Other" />
                </datalist>

                <label htmlFor="myComments">Comments:</label>
                <textarea
                    rows="3"
                    id="myComments"
                    name="myComments"
                    value={formData.myComments}
                    onChange={handleChange}
                    required
                ></textarea>

                <input type="submit" value="Send Now" id="mySubmit" name="mySubmit" />
            </form>

            {responseMessage && <p>{responseMessage}</p>}

            {/* Social Media & Contact Links */}
            <section id="socials">
                <h3>Connect with Me</h3>
                <ul>
                    <li>
                        📧 <a href="mailto:chaicheyene@gmail.com" target="_blank" rel="noopener noreferrer">
                            chaicheyenne@gmail.com
                        </a>
                    </li>
                    <li>
                        🐙 <a href="https://github.com/CodingChaiT" target="_blank" rel="noopener noreferrer">
                            GitHub: @CodingChaiT
                        </a>
                    </li>
                    <li>
                        💼 <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BgfLxR3bwSsa4peeJkQyL5A%3D%3D" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        {/*📸 <a href="https://www.instagram.com/chaiteaax" target="_blank" rel="noopener noreferrer">*/}
                        {/*    Instagram: @chaiteaax*/}
                        {/*</a>*/}
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default Contact;
