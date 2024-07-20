import { Helmet, HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <div>
      <h1 className="title">ReactJS</h1>
      <img src="/assets/images/image01.jpg" width={300} />
      <HelmetProvider>
        <Helmet>
          <script src="/assets/js/script.js"></script>
          <link rel="stylesheet" href="/assets/css/style.css" />
          <style>
            {`
                .title {
                    font-style: italic;
                }
                `}
          </style>
        </Helmet>
      </HelmetProvider>
    </div>
  );
}

//Static Assets
