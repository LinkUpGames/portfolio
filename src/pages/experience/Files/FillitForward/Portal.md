### The Client Portal

The client portal was probably one of the biggest projects that I had to contribute to. When I first started the role, I did not know much about web development, let alone how api calls were made from the front end to the backend using the [Apollo Client]("https://www.apollographql.com/docs/react/"). This project was originally handled by an external software development company and had a lot of deprecated functionality. I was brought in to redesign, speed up and clean up the client portal.

##### Task

The codebase was built on an older version of Node.js (version 16), which introduced technical debt and some challenging code structures. To combat this issue, I first had to identify what libraries were being used. Some libraries in this technical debt included **Material UI**, which was being used throughout the whole site.

I redesigned the Client Portal, focusing on a  clean and modern aesthetic. To achieve this, I moved from **Material UI** to **Tailwind CSS**, allowing for greater control over the design and a minimal library implementation.  I built a custom components library using **ShadCN UI**, enabling the team to quickly implement new features while maintaining design consistency across the portal. This approach resulted in around a 40% reduction in development time and a more streamlined user experience. We "rebuilt" the client portal in three sprints, including the building for the custom styled components to the finished delivered product.

##### What I learned

I learned that understanding a codebase is the first step in understanding how to take it down. I also learned that maintaining a project is crucial to avoid tech debt and that following best practices sets up teams for success when developing big features.
