import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import { withLayout } from '../../layout/Layout';
import axios, { AxiosResponse } from 'axios';
import { MenuItem } from '../../Interfaces/menuInterface';
import { TopPageModel } from '../../Interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../Interfaces/product.interface';
const firstCategory = 0;

function Course({ menu, page, products }: CourseProps) {
  const [rating, setRating] = useState<number>(4);

  return <>
    {products.length}
  </>;
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );

  return {
    paths: menu.flatMap(m=>m.pages.map(p=> '/courses/' + p.alias)),
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu }: AxiosResponse<MenuItem[]> = await axios.post(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );

  const { data: page }: AxiosResponse<TopPageModel> = await axios.get(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
  );

  const { data: products }: AxiosResponse<ProductModel[]> = await axios.post(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
    {
      category: page.category,
      limit: 10,
    }
  );
  return {
    props: {
      page,
      firstCategory,
      menu,
      products,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: TopPageModel;
  products: ProductModel[];
}
