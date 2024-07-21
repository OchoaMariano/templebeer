import React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Text,
  Link,
} from "@react-email/components";
import LogoFrase from "../../public/form-ipasionales/mailing/logo-frase.png";
import Logo from "../../public/form-ipasionales/mailing/logo.png";
import Card from "../../public/form-ipasionales/mailing/card.png";
import LogoAmigos from "../../public/form-ipasionales/mailing/logo-amigos.png";
import LogoClub from "../../public/form-ipasionales/mailing/logo-club.png";

export default function EmailTemplateB({ nombre, apellido }) {
  return (
    <Html lang="en">
      <Head>
        <title>Bienvenido al IPAsional Club Social</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body {
            font-family: Arial, sans-serif;
          }
        `}</style>
      </Head>
      <Body style={{ backgroundColor: "#222222", margin: 0, padding: 0 }}>
        <Container
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            backgroundColor: "white",
          }}
        >
          <Section style={{ backgroundColor: "white", padding: "30px" }}>
            <Text style={{ fontSize: "10px", color: "#606060" }}>
              22 de JULIO, 2024. Republica Argentina.
            </Text>
            <Img
              src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo-frase.png"
              width="200"
              height="auto"
              alt="Temple Beer Logo"
            />
            <Img
              src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo.png"
              width="200"
              height="auto"
              alt="Temple Beer Logo"
              style={{ marginTop: "30px" }}
            />
          </Section>

          <Section style={{ padding: "0 30px" }}>
            <Text>
              Seguro escuchaste de grandes clubs como El Club de la Pelea, The
              Breakfast Club, tu club favorito de fútbol.
            </Text>
            <Text>
              Pero el IPAsional Club Social es distinto: acá lo que nos une es
              el amor indiscutido por la WOLF IPA y todos aquellos que se
              autoperciban enamorados de nuestro icónico líquido, son más que
              bienvenidos.
            </Text>
            <Text>
              Como ceremonia inaugural de tu bautismo en este club queremos
              darte tu propia credencial IPAsional (imaginate que hacemos un
              gesto pomposo con la mano).
            </Text>
            <Img src={Card} width="200" height="auto" alt="IPAsional Card" />
            <Text>
              Ahora sí, flamante nuevo miembro de nuestro club, como regalo
              especial queremos darte un montón de promociones especiales, solo
              por ser vos.
            </Text>
            <Text>
              Usalos sin miedo, que la idea es disfrutar y tomarnos unas WOLF
              brindando con amigos. Y quien te dice, que van a llegarte nuevos
              beneficios próximamente 👀 vamos a estar compartiendo data por
              nuestro canal de instagram exclusivo para IPASIONALES, no podés no
              estar adentro.
            </Text>
            <Text>
              Mientras esperas para saber quiénes serán los finalistas para
              convertirse en EL MÁS IPASIONAL 2024, te sugerimos que nos
              stalkees en nuestro Instagram y estés atenti, con birra en mano,
              para enterarte de todo
            </Text>
            <Text style={{ marginLeft: "25px" }}>
              Nos estamos viendo donde nos encuentre una WOLF,
            </Text>
            <Img
              src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo-amigos.png"
              width="200"
              height="auto"
              alt="Amigos Logo"
              style={{ marginLeft: "auto", display: "block" }}
            />
            <Img
              src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo-club.png"
              width="200"
              height="auto"
              alt="Club Logo"
              style={{ marginTop: "30px" }}
            />
          </Section>

          <Section
            style={{
              padding: "30px",
              fontSize: "10px",
              color: "#888888",
              textAlign: "center",
            }}
          >
            <Text>
              TE ESPERAMOS EN CASA CON UN 20% OFF // 20% de descuento en Temple
              Bar. Tope de Reintegro: $4,500. No acumulable con otras
              promociones o beneficios Ipasionales. Valido para todos los Temple
              Bar de Republica Argentina desde el 22 de Julio de 2024 al 31 de
              agosto de 2024. Deberá validar su registro Ipasional junto a su
              DNI para acceder a la promo.
            </Text>
            <Text>
              HAPPY HOUR TODO EL DIA PARA IPASIONALES // Precio de pinta de Wolf
              IPA para Ipasionales: $3,500. Solo aplicable a Wolf IPA. No
              acumulable con otras promociones o beneficios Ipasionales. Valido
              para todos los Temple Bar de Republica Argentina desde el 22 de
              Julio de 2024 al 31 de agosto de 2024. Deberá validar su registro
              Ipasional junto a su DNI para acceder a la promo.
            </Text>
            <Text>
              BRINDIS CUMPLEAÑERO // Copón de 2 litros gratis para el
              Cumpleañero Ipasional. A partir de 8 pintas consumidas en la
              fecha, se entrega de regalo un copón de 2 litros gratis al
              cumpleañero del día. No acumulable con otras promociones o
              beneficios Ipasionales. Valido para todos los Temple Bar de
              República Argentina desde el 22 de Julio de 2024 al 31 de agosto
              de 2024. Deberá validar su registro Ipasional junto a su DNI para
              acceder a la promo.
            </Text>
            <Text>CÓDIGO "IPASIONALES" CON 20% OFF EN TODA NUESTRA WEB</Text>
            <Text>
              Promoción sin obligación de compra, organizada por CERVECERÍA Y
              MALTERÍA QUILMES S.A.I.C.A.Y.G., Av. Del Libertador 7206 piso 26°,
              CABA, CUIT N° 33-50835825-9. Vigencia del 24 de julio al 31 de
              octubre de 2024 en el territorio de la República Argentina. Para
              más información y condiciones o limitaciones aplicables consulte
              en:{" "}
              <Link href="https://www.ipasionales.templebeer.com">
                https://www.ipasionales.templebeer.com
              </Link>
              . BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
