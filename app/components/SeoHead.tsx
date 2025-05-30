import Head from "next/head";

const SeoHead = ({
  title = "Saudi Car Taxi Services | Umrah Transport | Airport Pickup",
  description = "Reliable car rental, Umrah taxi, and airport transfer services in Saudi Arabia. Travel comfortably from Jeddah, Makkah, Madinah and more.",
  image = "/og-cover.jpg",
  url = "https://yourdomain.com",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SeoHead;
