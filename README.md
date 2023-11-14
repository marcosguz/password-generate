<h1 align="center">Password Generate App</h1>



```javascript
export function PasswordGeneratorCard() {
    const [password, setPassword] = useState("Amazing Password");

    return (
        <div className={s.root}>
            <div className={s.main}>
                <PasswordGeneratorHeader />
                <PasswordGeneratorBody onSubmit={setPassword} />
            </div>
            <PasswordGeneratorFooter password={password} />
        </div>
    );
}
```
## Architecture
This application will be contained in an application component or root component.

<table width="100%">
    <tbody width="100%">
        <tr>
            <td rowspan=5 align="rigth">
                <img src="https://github.com/marcosguz/password-generate/assets/75583218/b78b9c76-248a-4bdc-b7b0-43bbce701e0d" width="100%">
            </td>
        </tr>
        <tr>
            <td align="justify">Create a component for the entire password generator, card, etc. It's going to contain everything all the sub components..</td>
        </tr>
        <tr>
            <td align="justify">You probably have to create a component for the header, because it is completely static</td>
        </tr>
        <tr>
            <td align="justify">Another component would probably be created for the form.
				Here we have all the inputs and a button to submit the form.</td>
        </tr>
        <tr>
            <td align="justify">And finally, a component must be created, this section only contains the password but also the logic to copy it to your clipboard.</td>
        </tr>
    </tbody>
</table>

## About the project

<table width="100%">
    <tbody width="100%">
        <tr>
            <td rowspan=5 align="rigth">
                <img src="https://github.com/marcosguz/password-generate/assets/75583218/3fe02943-ca32-46c2-ab9c-2439ef9fb08a" width="500px">
            </td>
        </tr>
        <tr>
            <td align="justify">This web application is a tool developed to facilitate the creation of passwords. It is quite simple to use: just
You must choose the characters you want your password to have, and you can also copy it to your clipboard, for greater convenience.</td>
        </tr>
        <tr>
            <td align="justify">
				<a href="https://pass-guard-generate.vercel.app/">Password Generator App</a>
			</td>
        </tr>
    </tbody>
</table>

## Developed with
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## How to contribute?
Contributions are what make the open source community an amazing place to learn, inspire, and create. Any contribution you make is greatly appreciated.

1. Fork the project.
2. Create a feature branch: (git checkout -b features/amazing-feature).
3. Commit your changes: (git commit -m 'Add an Amazing Feature').
4. Upload your changes to the branch: (features/amazing-feature)
5. Open a pull request

## License
Distributed under the MIT license. See the `LICENSE` file for more information.

## Contact
Marcos Guzmán

<a href="https://www.linkedin.com/in/marcos-guzman-nazareno" target="blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Marcos"/>
</a>
<a href="https://twitter.com/marccosgz" target="blank">
      <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
</a>

## Recognitions
- [Create React App](https://github.com/facebook/create-react-app)
- [Marked](https://marked.js.org/)
