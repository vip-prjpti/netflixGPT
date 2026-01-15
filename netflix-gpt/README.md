# Netflix GPT


- npm create vite@latest netflix-gpt
- npm i tailwindcss @tailwindcss/vite
- Header
- Routing
- Form validation
- firebase Setup
- firebase deoploy
- Create Signup User in fireb ase
- Implement SignIn user API
- created Redux store w/ userSlice
- implemented SignOut
- Update Profile
- Bug fixes: Sign up user displayName and profile picture
- Bug Fixes: If the user is not logged in Redirect /browse to Login page "/" 
- Unsubscribe to the onAuthStateChange callback
- 
- Fetch from TMDP API



# Features
- Browse
  - Login/Signup 
    - Sign In / signup form
    - redirect to browse page
  - Browse (after authentication)
    - Main Movie
        - Trailer in bg
        - title & description
        - Movie suggestions
        - movie list * n

# Hooks Used
- useState
- useRef - this hook lets us reference a value that's not neede for rendering.
- useEffect
- useNavigate

# Redux
- 

Q. why react logs twice?
Ans. React does extra rendering of your component just to check for some inconsistency in between the calls.