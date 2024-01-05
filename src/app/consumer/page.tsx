import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./_partials/Consumer"), { ssr: false });

const page = () => {
  return <NoSSR />;
};

export default page;
