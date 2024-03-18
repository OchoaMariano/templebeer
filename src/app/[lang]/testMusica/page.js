import Image from "next/image";

async function getMusicaEs() {
  const apiUrl =
    "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/musicas?populate=image&locale=es";
  const respuesta = await fetch(apiUrl);
  if (!respuesta.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return respuesta.json();
}

async function getMusicaEn() {
  const apiUrl =
    "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/musicas?populate=image&locale=en";
  const respuesta = await fetch(apiUrl);
  if (!respuesta.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return respuesta.json();
}

export default async function Page() {
  const musicaEs = getMusicaEs();
  const musicaEn = getMusicaEn();

  const [mEs, mEn] = await Promise.all([musicaEs, musicaEn]);

  mEs.data.forEach((item) => {
    console.log(item.attributes.video_url);
  });

  return (
    <div>
      {mEs.data.map((item) => (
        <div key={item.id} className={`bg-${item.attributes.background}`}>
          <h2>{item.attributes.Title}</h2>
          <h1>Background Color: {item.attributes.background}</h1>
          <p dangerouslySetInnerHTML={{ __html: item.attributes.bajada }}></p>
          <a href={item.attributes.video_url}>Video</a>
          <Image
            src={item.attributes.image.data.attributes.url}
            alt={item.attributes.Title}
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}
