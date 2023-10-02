import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="max-w-[300px] border border-gray-200 rounded-lg shadow bg-blue-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="rounded-t-lg w-full mix-blend-multiply"
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title.substring(0, 32)}...
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.currency} {product.currentPrice}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description.substring(0, 110)}...
        </p>

        <Link
          href={`/products/${product._id}`}
          className="searchbar-btn flex items-center justify-center"
        >
          Explore
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
