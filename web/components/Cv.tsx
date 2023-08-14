import { CV } from "@/types";
import * as React from "react";
import { GridRow } from "./GridRow";
import { GridColumn } from "./GridColumn";
import Image from "next/image";
import { Link } from "./Link";
import { Icon } from "./Icons";
import classNames from "classnames";
import { CvItem } from "./CvItem";

interface CvProps extends CV {}

export const Cv: React.FC<CvProps> = ({ title, description, categories }) => {
  return (
    <main className="grid lg:grid-cols-[1fr_3fr] h-full">
      <div className="border-b lg:border-b-0 lg:border-r h-full relative">
        <div className="sticky top-0 p-24 bg-background border-b">
          <h1>{title}</h1>
          <div className="my-24">
            <p className="font-bold">Iben Kortegaard Rohde</p>
            <p>+45 20 83 50 21</p>
            <p>iben-rohde@hotmail.com</p>
          </div>
          <p className="mb-24">{description}</p>
          <Link href="/portfolio">
            Se min portfolio <Icon icon="rightArrow" />
          </Link>
        </div>
        <div className="border-b">
          <Image
            src={"/Iben.png"}
            alt="Portrett av Iben Kortegaard Rohde"
            width={1348}
            height={1912}
          />
          <div className="p-24 space-y-16">
            <Link icon="video" href="https://youtu.be/pnJR4g_UuxQ" leading>
              En personlig introduksjon
            </Link>
            <Link href="https://youtu.be/iRA2Bszg2Sw" icon="video" leading>
              Hvorfor jeg blevede arkitekt
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full">
        {categories.map((category) => (
          <div
            key={category.title}
            className="grid md:grid-cols-[1fr_3fr] relative border-b"
          >
            <div className="md:border-r p-24 block relative">
              <h2 className="sticky top-24 text-24">{category.title}</h2>
            </div>
            <ul className="pt-96">
              {category.items.map((item) => (
                <CvItem {...item} key={item._id} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};
