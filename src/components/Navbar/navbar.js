import React from 'react';

export default function Navbar() {
    return (
        <div class="nav" style="justify-content:space-between">
            <img class="nav-brand" src="./images/Logo.png" alt="logo"></img>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="#">project</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">about</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./resume/Justin Zeng's CV.pdf">resume</a>
                </li>
            </ul>
        </div>
    )
}