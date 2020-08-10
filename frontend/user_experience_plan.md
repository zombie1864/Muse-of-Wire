# Muse of Wire

## UI/UX Views & Frontend Routes Planning Document

### Upon navigating to our site, a new user will see our "Splash Page" (`/`).
* __Navigation *component*__
  * Login
  * Sign up
* __Welcome/Body/Splash (or something) *component*__
  * Interest-piquing media (images or video)
  * "Sign up to plug-in to art and artists" or something blah blah
  * Login/signup (modal?) <= I'm not familiar with these, but could learn probably
* __Footer *component*__

### A new user can create a new account (`/signup`)
* __Signup *component*__
  * Email (`email`)
  * Password (`password`)
  * Account Type (`status`)
    * Radio button
  * Possible other fields to collect/store:
    * Name (`name`)
    * Password Confirm (`password2`)
    * Interests? (ie what kind of art are they looking to make/see)
      * Checkboxes
    * Username (a different alias for public display)? (`username`)
      * This could be included as a login option ("Enter username or email") but that would be more work.

### A current user may still be logged in from last time, but if their session
token has expired, they will need to login (`/login`) 
* __Login *component*__
  * Email
  * Password

### Logged in users are presented with a more personalized view (`/user/:user_id`)
* __Navigation *component*__
  * *not sure what this would be, if user view has multiple sections or if they would use navigation to change between sections*
    * create
    * creators
    * creations
    * search
    * logout
* Name?
* *see below*

#### User view is further personalized by account type (`status`)
* __Body *component*__
  * Member *component?*
    * List of available art to connect with?
    * List of available artists to connect with?
    * Images/videos
    * Search
  * Artist *component?*
    * List of their past & current projects
    * Form for submitting image/video
      * Title of work
      * Description
      * Media file (or url?)
    * Possible other fields to collect/store:
      * Date of creation or performance
      * Age appropriate rating
  * Student *component?*
    * Filtered list of available art to connect with (age appropriate)
    * Images/videos
    * Search (filtered for content)

### Upon selecting existing art (or when a performer submits a project) the user is taken to a view specific to that piece/project (`/work/:work_id`)
* __Work *component*__
  * Artist's Name
  * Title of work
  * Description
  * Media

### Future views/functionality could include:
* Live, interactive, streaming video chat
* Likes/comments on work
* Posting requests for a kind of work or a collaboration

