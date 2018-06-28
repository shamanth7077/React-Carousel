This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Notes:

1. The application has been built using ReactJs, Redux and Redux thunk.
2. No External libraries are used for carousel nor for the responsive layout.
3. CSS modules are used to load styling into the components and the styles are componentized (Galmor: https://github.com/threepointone/glamor).
4. Reposniveness is handled with media queries.
5. The sliding of the carousel is done using transition to provide an animated sliding effect.
6. The Carousel component is made generic so that it can hold any custom template(Carousel Item).
7. TDD is written to check the loading of components using Enzyme, Chai and Jest.
8. The images are fetched from pixabay (Pixabay: https://pixabay.com/api/?key=9396558-1ca0a4da9897b0b9209515521&q=yellow+flowers&image_type=photo&pretty=true).
9. The carousel is made to look as close to the mockups provided and is cross browser compatible.
10. Git has been used with the help of gitbash and tortoise git.



To run the project:

- Move inside the carousel folder.
- Install all the node packages using 'npm install'
- Once the installation is done, run 'npm start' to run the application.
- You can run the test cases by using the command 'npm test'

(May require create-react-app to be installed globally if not installed, https://github.com/facebook/create-react-app)