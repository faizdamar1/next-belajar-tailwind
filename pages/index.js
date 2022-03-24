import ButtonComponent from "../components/ButtonComponent";
import App from "../layouts/App";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/2">
        <h1 className="font-display font-semibold text-2xl mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sint.
        </h1>
        <article className="text-lg leading-relaxed">
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            similique voluptates dolorem vero quis possimus deleniti ex sequi
            magnam, quo amet officia? Unde impedit architecto repellat autem
            dolorum. Iste, tenetur.
          </p>
          <p>
            Quae tenetur sunt officiis sapiente possimus beatae magnam quasi
            tempore non nihil dicta omnis assumenda ratione consequatur
            necessitatibus facere quam, eligendi hic. Ab, animi esse doloribus
            hic doloremque consectetur consequuntur!
          </p>
        </article>

        <div className="flex item-center justify-evenly mt-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="currentColor"
            className="text-messenger bi bi-messenger"
            viewBox="0 0 16 16"
          >
            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="currentColor"
            className="text-facebook bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="currentColor"
            className="text-twitter bi bi-twitter"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = (page) => <App children={page}></App>;
