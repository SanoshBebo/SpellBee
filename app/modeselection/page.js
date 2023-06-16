"use client";
export default function Home() {
  return (
    <div className="font-lilita h-full mt-10">
      <div className="bg-primary h-[78%] rounded-3xl p-[20px] flex items-center justify-center relative">
        <div className="bg-tertiary h-14 w-14 absolute right-0 top-0 m-5 rounded-md">
          <div className="h-full flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2em"
              viewBox="0 0 384 512"
            >
              <path
                fill="white"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 
            86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 
            361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 
          406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </div>
        </div>
        <div className="bg-tertiary h-14 w-14 absolute left-0 top-0 m-5 rounded-md">
          <div className="h-full flex items-center justify-center cursor-pointer">
            <svg
              width="23"
              height="29"
              viewBox="0 0 23 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.12561 16.6176L18.8592 28.4598C19.2775 28.7922 19.8212 29 20.4486 29C21.8289 29 23 
                27.8782 23 26.4653L16 14.4982L23 2.53119C23 2.03249 22.8326 1.53399 22.54 1.11846C21.7871
                 -0.0450412 20.1977 -0.335956 19.0268 0.41197L1.16751 12.379C0.874675 12.5453 0.623776 12.7945
                  0.414676 13.0855C-0.338157 14.249 -0.0455428 15.8282 1.12561 16.6176Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="h-[80%] w-3/4 bg-white">
          <div>
            <div>profile pic</div>
            <div className="flex">
              <div>score</div>
              <div>stage</div>
            </div>
          </div>
          <div className="flex">
            <div>casual</div>
            <div>competetive</div>
          </div>
        </div>
      </div>
    </div>
  );
}
