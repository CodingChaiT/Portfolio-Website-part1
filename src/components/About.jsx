import React from "react";
function About() {
    return (
        <main>
            <h2>All About Chai</h2>

            <table>
                <tr>
                    <th>Education</th>
                    <td>
                        I&#39;m currently pursuing a Bachelor&#39;s degree in Computer Science at Minot State University,
                        with a focus on humanities and biology. I&#39;m passionate about developing creative applications,
                        writing clean, purposeful code, and integrating insights from the humanities into my projects
                        to create more thoughtful and human-centered technology.
                    </td>
                </tr>
                <tr>
                    <th>Favorites</th>
                    <td>
                        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                            <div>
                                <strong>Color:</strong> Green<br />
                                <strong>Food:</strong> Caesar salad or pizza<br />
                                <strong>Drink:</strong> Boba or a crisp Coke Zero
                            </div>
                            <img
                                src="/Boba.gif"
                                alt="Boba"
                                width="120"
                                height="150"
                            />
                        </div>
                    </td>

                </tr>

                <tr>
                    <th>My Pets</th>
                    <td>
                        I have three dogs and one cat. My dogs are Marlie, Artemis, and Harry Houdini.
                        My cat&#39;s name is Cookie.
                    </td>
                </tr>

                <tr>
                    <th>Dreams</th>
                    <td>
                        My dream job is to work at Apple or Google, where I can be part of developing
                        groundbreaking technology that shapes the future.
                    </td>
                </tr>
            </table>


        </main>
    );
}
export default About; 