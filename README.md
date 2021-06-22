

## Sowmya J - Ramamortthy V


We started with Next.js basics.

- Integrating typescript

- Routing - File based routing. Next.js provied a special folder called pages where all the routes can be placed.

- _app.tsx: Each routing is handled via this file. Global things can be specified here.

- _document.tsx: This file is only rendered on server side. We can specify the necessary snippets here so that stylings won't break due to SSR

- 404.tsx: Custom error page

- index.tsx - Special file pointing to the default route of a page (i.e '/')

- Dynamic Routes: Specified by `[]` which can take any value and it can be retrived by router parameter named `query`.

- CatchAll Routes: Specified by `[...]` which is going to catch all the routes except the one specified explicitly.

- useRouter : 
    - We can make use of the router object on the client side by making an instance of useRouter()

    - Link tag to navigate between pages.

- HEAD Component : For better SEO, we can make use of the built-in HEAD tag and other meta tags in all the pages

- Styled jsx : CSS-in-Js library to write scoped CSS to style the components
    ```
     <style jsx>{`
            .......
        `}

    To apply global styles: 
    <style jsx global>{`
            .......
        `}
    ```

- Next.js by default pre-renders all the pages

- Forms of Pre-rendering :
    - `Static Generation` : 
        - Runs on the server side and the pre-rendered page is created at the build time. 

        - By changing the value after the build time wont't affect the rendered page
    

    - `getStaticProps()` : 
        - Used for static generation.

        - It returns an object with following parameters
            - props : An object that can be passed as a props to component in which it is defined.

            - revalidate(sec) : Time after which the page must regenerate

            - notfound : When there is an error in fetching data, it will redirect to 404 page

            - redirect : Redirect to particular page if required


    - `getStaticPath()`: During static generation of dynamic pages Next.js dosen't know how many pages it needs to pre-render, so we need to provide additional information about the dynamic pages.
        - It returns an object with following parameters
            - paths: An array containing the paths which needs to be pre-rendered for dynamic pages

            - params: parameters describing the path

            - fallback: To tell Next.js who is going to handle the dynamic pages
                - false: Client will give information about the dynamic pages

                - true: Server will dynamically generate pages 
                corresponding to incoming request

                - blocking: Will send props to the component only after the data is received

    - `getServerSideProps()`: Going to return the updated page content for every request.(No pre-generation)
        - It returns an object with following parameters

         - props : An object that can be passed as a props to component in which it is defined.

    - `Client Side Rendering` : Used for getting data from client side(useEffect/fetch) but its html is not returned which results in poor SEO.

- Context parameter : While using SSR or SG the function will take in a parameter called `context`.

    - Using the parameter we can get the dynamic parameter under `param` object

- Image: 
    - Built-in image optimization 

    - Provides compressed image size thus reducing the loading time of image

    - Images are lazy loaded by default.


-  `Reading a file` : Node.JS code is supported and hence we made use of default file system `fs` and `path` module to read/write a file.

Dynamically rendering and importing components based on the routes :
 - Utilizing the built in `dynamic` import feature of Next.JS, we can import modules or components dynamically

react-jsx-parser: React component to parse JSX and output rendered React Components. 
 - It takes the following properties:
   - `bindings`: To define props or function required by the string as a single object

   -  `components`: Components used in jsx string

   -  `autoCloseVoidElements`: If the given string is an html element some tag dosen't need autoclosing. Under this case we can make this property to `true` otherwise it's default value is `false`

    - `jsx` : jsx or html is passed as string here

We learned Mapping through items (also nested maps) via custom functions using [jsx-parser](https://www.npmjs.com/package/react-jsx-parser) 


Thereby, we got an overview of bsaic next.js application


*****************************************************



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



























