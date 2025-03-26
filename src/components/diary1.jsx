
import gifFile from "../assets/heart-5251_512.gif";
import { SquarePen } from "lucide-react";

function Diary() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <>
      <div className="flex flex-col bg-white ml-20 mr-20">
        <div className="flex-1 flex items-center justify-between  border-black border-b-3 pb-3">
          <section className="font-semibold text-4xl text-black">
            Diaries
          </section>
          <section>
            <button className="sticky left-0 z-10">
              <SquarePen size={48} color="black" />
              <span className="sr-only">Open Diaryentries</span>
            </button>
          </section>
        </div>

        <div className=" flex-5 flex items-center justify-between mt-5 mb-5 text-xl">
          <section>Public</section>
          <section>{currentDate}</section>
        </div>
        <div className="bg-emerald-300 shadow-xl flex-1 flex items-center justify-between mt-5 mb-5">
          <div className="flex-2 text-xl">
            <section className="font-bold">Dear Diary...</section>
            <section className="indent-30">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                fuga aliquam voluptates inventore reprehenderit dolorum ex qui
                est, nam vitae, doloribus beatae veritatis rerum explicabo sunt
                error velit maiores illo, rem repellat et nisi. Iste, sunt
                itaque. Dicta tenetur necessitatibus quam asperiores accusantium
                illum, deserunt sapiente, vitae esse commodi provident labore
                nihil dolorem pariatur, magnam neque repellendus quo quis
                explicabo. Illo qui fugiat maiores? Laborum recusandae expedita
                voluptate animi facere dolor nam dolore id amet iusto harum qui
                aperiam, voluptates quod eius corrupti velit illum alias a
                deserunt minimam consequuntur accusamus placeat eaque! Libero,
                rem quidem molestias
              </p>
            </section>
          </div>
          <div className="flex-1">
            <img
              className="border-2 border-black rounded-lg"
              src={gifFile}
              alt="A fun GIF"
            />
          </div>
        </div>
        <div className="bg-emerald-300 shadow-xl flex-1 flex items-center justify-between mt-5 mb-5">
          <div className="flex-2 text-xl">
            <section className="font-bold">Dear Diary...</section>
            <section className="indent-30">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                fuga aliquam voluptates inventore reprehenderit dolorum ex qui
                est, nam vitae, doloribus beatae veritatis rerum explicabo sunt
                error velit maiores illo, rem repellat et nisi. Iste, sunt
                itaque. Dicta tenetur necessitatibus quam asperiores accusantium
                illum, deserunt sapiente, vitae esse commodi provident labore
                nihil dolorem pariatur, magnam neque repellendus quo quis
                explicabo. Illo qui fugiat maiores? Laborum recusandae expedita
                voluptate animi facere dolor nam dolore id amet iusto harum qui
                aperiam, voluptates quod eius corrupti velit illum alias a
                deserunt minima consequuntur accusamus placeat eaque! Libero,
                rem quidem molestias
              </p>
            </section>
          </div>
          <div className="flex-1">
            <img
              className="border-2 border-black rounded-lg"
              src={gifFile}
              alt="A fun GIF"
            />
          </div>
        </div>
        <div className="bg-emerald-300 shadow-xl flex-1 flex items-center justify-between mt-5 mb-5">
          <div className="flex-2 text-xl">
            <section className="font-bold">Dear Diary...</section>
            <section className="indent-30">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                fuga aliquam voluptates inventore reprehenderit dolorum ex qui
                est, nam vitae, doloribus beatae veritatis rerum explicabo sunt
                error velit maiores illo, rem repellat et nisi. Iste, sunt
                itaque. Dicta tenetur necessitatibus quam asperiores accusantium
                illum, deserunt sapiente, vitae esse commodi provident labore
                nihil dolorem pariatur, magnam neque repellendus quo quis
                explicabo. Illo qui fugiat maiores? Laborum recusandae expedita
                voluptate animi facere dolor nam dolore id amet iusto harum qui
                aperiam, voluptates quod eius corrupti velit illum alias a
                deserunt minima consequuntur accusamus placeat eaque! Libero,
                rem quidem molestias
              </p>
            </section>
          </div>
          <div className="flex-1">
            <img
              className="border-2 border-black rounded-lg"
              src={gifFile}
              alt="A fun GIF"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Diary;
