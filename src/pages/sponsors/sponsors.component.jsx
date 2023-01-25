import { motion } from "framer-motion";

import Banner from "../../components/banner/banner";
import SponsorBox from "./sponsorbox.component";

import { SectionDiv } from "../section.styles";

const sponsorList = [
  {
    name: "The Biking Lawyer",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAxlBMVEX///8DGkwAAEIAAEAAADwAAD0AAEMAACjt8vJ4fpTw8PMAADkAACoAADf///3i4+VhaH8AFkpzeo6+w8spNV719versLkAADXp6+3Z2eEADkoTJlYAAC+SmKcAEUeanqtPWHlFTWtvdYYAC0bZ3eF8gpQAAEemqrW0ucOLkaLQ0te2u8JsdIxNV3McLVXHytFbYnoyP2MpNlsAAB4zPmJFUG8YKVVJVG4HH0w0QF9UXXZlbYIkL1Q9Sm8sOFuEiJwAABgTI0w0Il3sAAAOcElEQVR4nO2cCXuiuhrHE7YqSBApSy1CLSiLC+pRx+q0nfn+X+ombIJL7zlzrrQzN7/nmalCwPxN8i5JEAAKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUH5b0GdXgPKvGS17bqglmhaGmo8A+tPaFIHQZBmWZXmZNe2OGf1pAkmTxa8Mo6rrYDGIYy354xQSkNadj2fRw2fX46ZY3wfXT+qKpTdXlVvRHl7vnqHNrA6B8pv331i2rp7TuM1sbEuzwAK/sam1nPDqOV3qAkXrrTrec/zbCgRg9pxHNwidtdOzSf7XkwMnjX5fie/b0pogvWVZiuL7D3EcJ9rEmNpJdiZ+M43PquC/RpMP08XTbDh8Wa/mj6oj8LJp33Vsk9l+W/NRXiqWF59ay3+Dz6hPi8O0N3qPBgM3MEItflAsqyW2dIS2u7wLt7bL39ZxRNz99bq7tp+9sIRvDdXnf47/FtnX/cXIDPIXtvu7plt7Q+HDa5U35PErQEnozuzF79pJtSUCw9EVhZr0tuda2g/bfLnuNL8kfqIlWc9EK+wO3PkVgRxvKXcT4LtRezqNjLjJOv46VrDhOEZgJKenIeBu8CHfVi6VTDgJH3+cQ15geU7icC459Ruu7T/HX5gcK0iSLDEMb5pLIW2Xe/e8JHpgzAegdxlV4B4XketGG4Zn5Zn/pQ2O3jY5fmHE2GjovjZY91VvSgxIe39eNmbNBBicwLCDwsYgbcYI9gfZ1qfzcM8K71XPkMges8MDMTHPDCUWGIKuzLzEu/fq4SEjXfg6vgiJww7r4+jwHK8FLgAie2oqfYgP73k2IHboeBh3UFdgX25f118Agdhje/VjMSMCfcHIAdj06qNL2XIDcOAZMkpFu/614C9q9iXHojXnRydp7GuAa4oOLOMHQu2EtcJlB3xmhsAiAjUeBP4dfEG6fLf2HoHwLZO1Z19js+rrxCH3jBu46LqJc3KrCc8lt6vor6LJ30+iT93Jq2ndc+73Sjvp3zicKc34af4e3Z+O0h67vFU9fxn0yp9msO0y4dOE+euxynpXnulAY53yGzFOTYtO2veLDcXEXNfGIKoEMggshEez0IOm5lDEg4+NytP6YwzqFw/Y4c2r/A/pSSdhC1pWrEUyVtkgFYHASH7D0hWVr0Ry7vSkxSzT+2LxG4LCSY0mXKty+k31cj/+bm7JFLjBzyqaWo+nGeQrF9yinr+OYr7V3iMk1Np070AJpN1PdlKrOuUrpgc37KmeAdsFX4qQn1Xe4RE55fM4TddFy/dfHci4iQI0Mzew36SK/cSD9j6ux3Uh98UCG5evjCQssM3CfW8UDdyMYORB5yUYPW23WWfWl2ZtucaSuU2reiCRvjdS8b+Ny9fS+MBUvVF1aIXsznvD5pXXsvfifT1ljGXV1KoHHuT515rVcLlKSIpAxEPHlh83OG/XYkXUdZfvdk1ty21GWRHx7aQNJYGrmaoH84u1YcBV53ORvrBffF3RgveN0DF51nPgvO0JrA9+5kWGUq3JgDY6ec+tb1vjf0oinxgGxX1dZHVuJcH74hGqHiQO4zVvqQX3caLrsrMPzzeOaMLauCJj0gqGszAfnG99VZCdJ6wwL/bfvMGU/WKpPlqe9LoM3XhahNhi+B4X49icE8WfuUGKWeb6NDFmzH617CJizxdW0kBVD7vd0GVX+KVmd2elF3xhL8xOFReCCTu/evaT8KUPAkmDw2m7poMZWyZM2DY9fuAOlriTfrHcApuO6dVzLreK3SXnzNSj+dBXXHT1gtBUW1dPfhYxw1waiQTfkfNBNZCPSWTI8tfmuEWGv96FbwZCegEQSf/C73FmVxzCSQO/vTizDcQ11y4WCaFwjD8P7M/LxgYNmc/IDnEwTRy30+dcy07715SzwJvjeYyX5gn6kH25VOPWE7suVI1s7q70AvoLs7p0Adpz8EM7ezPc7nQjzKbdidV5TxXjtH2ltjHT1EJab+z6xNrgllNeWbUM0BTNSI6VV+bM9ryjKsNskrF5SD8zZDLWlE5UKqwadVw3aNQtIAofGfWqZ1PeeMGtW1RkQH7XmECElJLsmzfMTOF7mgJihffzfG4ipTXluW/h0Qrq2oxnl7hdKzc6gqW1uhL3YojlBWI4lLiNdX7BjbYToVZnLAgMgT/kCidEoXn/7dtws+XxOFSHmOMKfLjipPue8YAr5YfttczvyLILavPZbQQMk74UGH5PvgpjxXHb58D3FeUhmH6XuC3J9vWDlBXPrhp3WjdyjqK9OnRTFoNcoZYp3M9m+3mqcEE4XqIHG0mSzbHqcTInrwek7VGw715gMdLLC2TBEWRJkl5d0qAoql/wZt/KO4qdUfkaVRTmvVTC43B7PFngu9PN23Y1PAxyz3D1+89PKEFvv16vZz3Xv3zB6O52Ctv1A3kv7aQThWeWpoIupj7y70demU+9Qrt5hUdbCkeEG2/YalBhYKcK/8r8oW2BucBjzOsh6f+E5hTiyC3tdiReQ+RNEcndeG/oDRXetS8ebzqvabCXfhLNt2HT/DkK9WQy0S5sh26mlyJwsOUciXkbldHx1JbtLLeQTbPMk3AOb8o2WQS1VNMcpxYquJPt6l6GoS3/lacd2FShYGlyPMtL8qtxMtSbUjgVYIkjmNNcTFuAWXZv9VVnWCp8GUNvTkKw1kpVs33QBgNVtuI6Zx6UCoVA23FqcXMO1qcLmlLYYyDsCykOrgy7yL7nNlsqhEeFGwY62zQhad2rajbpZLAQqpV1xienUIhAJONbOiTWFhxcyqzN4TSosP88IEQL6EEoTa4r3GOBu2xSo64Q9ldlbY8KQcSRfrEJkmTyfs+qaj0HbsbSpAr5Ipm1vnmQyTKqtneu8MBigXljnSiEwqG45VFhKEPo3Rdd09iZk1o9GmxDvhwfMQvVTfbx5wpxSUcteuNJL4WQK+bRSoX6VoXOWinNixU0ZmlO25AtFRI52eTnucJ3HjpeOTdTU6iu+tja5D0hV4iAy6mq88HURYNtiBWiYt0BClnyeKZwgLsoc9w+UlMouF3cvvNsTqRsw6VDbnY9FmyylxbjUHnpF1bxVKErqdCrTD7VFDKu/h3L2adqCoWWDNUPN5c0qNCZZrb0APtqsbJSV4gCVoXspNIgJwpBPMYFUmdQKNRwo7/k2b1VUNXUpD/0sqkhDxuMwtzVFM4MXH/oPX+gEAQ8dqZhRWHAFmMa6Pdwl+K0K7doUqHqZKjqbqadK4RbFVtFCKvbfc4UkhupxJeUChnoPeUK5/jWUFXVcTWpblChuh6mLFXe8fh3dKaQgG0JrGw7OFeoD7MRWyoUoLPJFUKeYRkcHnrVALZBbzHW8rWYVjhXIWecK1Sxy8TRgPNTv2hLU4XA3+Gh2CsVJjxUv2fTwsgIgsCIhMYUXvAWBbGH42x0qlAlA8zCYeu4nEO9oBCE2Pfz4b6fKdRxyMZXp/59/tPasFSIEBpiq0+++JrCfppHaSa2JcUa0yWFJCiAu3uYeXy0d6BXXSSPm1N4PWoD4NWB3KlCJ1/3i/BQLCKXSwqxqCwVyzw+CUuZSlr1iQorvVTDdkdNnxa5EHmDIR6Ku2xoXWxDYG3VQiFKi6vFrm+UOsjPUlhuMFdcPNa8LqnORYUt7Pf7sw8UgoRRyzYEPs5+VfY5M8D+CF/MfJK3gAzPpfACSVPjqwpBbBeRyxWFwOWPCsHExHoFfrvoziA3hjvVrm44bdDSVPHkrFthhcK5QpLTqqnyawoB8ZuFQpD0x8TXeB4JlyCjNpUB1+dp0jW9bPEPu+Vu7tTxYS5TiI++HtdXnjhcSCGPMPNsPz0cmIJZ2culrxjGLpMssc2wHglonDEPT3ZiNNWG4aDENZJSygS/T8Xq+EVw3EZL3kbYQOouLp+WjvGRqttTcIHKlgTRmK53u+0mOlsVb6gNr6Rv6MO3f788+qAQndX/dajCpmhaIQJW9TdzxHRzSGoxsuOiIipkqhQhS9GtfLMKEtM/uX3KyyMgFiv31bNnNK+wJx93sCGn4wPdJOv5+gtHKr7/Ya3vSDDwcPcKep07zI8eGJAX9irzoYp5yO4U/cgcnzg28dn1lb1/za89jfrHh7YMnjw5OiL7DH2exwJEdQ8U+S3dgOeDERto2mQSA1d2Nc3dsqljUbzn7PqBnSnU4dIIop10+UHuz1W4Hk5NESQd7Mojz+mSncAG+UEPN/2HFeYez+0QbRM7TSEU4URhC5LHorQrW05v2UsP/kOK7xd/YgtVFILENh7uXIB+LoG+7PYYCxwkklMsmYTdkAeaGE3xfTw+sx8xCXOF/VQhqrThHr9TyBSslX9Y/pHkRfeGbShwksTlwXb6v0Qel68oXDAIvECc0rK+bxtxJ9R/ppvwfdlL51PbYwZfxOvANXF3dWH2WOWZQhHiDFgfEf0DO/9A/Mnph0uScCuFqHXonTGdVBUq/NT3I2kC4rvAFRR9+5xky6U48k6Dy/Z4QKZesEKhc9fh91kcmvfSShs+7obDub3H1nQyPf/Qw63a8FoINnIKhSMe51Os8ArQ/csGD6Xedp+t94Iwe46pXY5DO2kZZr6L7Eyh+LidzQ6Bfi06bHr3x6jvp7toQEvdTzA9KQYRSx4ETlghT87DbIVsJPjZNmmXpBFdLvcWTF5qkCcXuvq1fkihzZFZYVMB7l9pHmB1FsA3VYvMWdu5TzPuUoW9tOj4GRd9II93j7NxOO5vf26xdRpwP7fbrRPq/a/1G0pZHhWJoJ0b/agrovd03AWjPDCJIz9NuaK0aAiSCBthfDTb1NCbEtp40BEOif58/dGE5ilHCnmRvkbnwwfVi5LfVrh4r5O/vzF/gAQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKh/P/yHwqlb6QrxgGuAAAAAElFTkSuQmCC",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ea distinctio minima veniam omnis expedita magnam iste voluptatum velit atque necessitatibus, rerum a totam magni ab aspernatur error corrupti. Nulla.",
  },
  {
    name: "Bikes on Wheels",
    image:
      "https://cdn.shopify.com/s/files/1/0391/5677/7091/files/BOW_Toronto_600.png?v=1637093303",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ea distinctio minima veniam omnis expedita magnam iste voluptatum velit atque necessitatibus, rerum a totam magni ab aspernatur error corrupti. Nulla.",
  },
  {
    name: "ROADKIT",
    image:
      "https://cdn.shopify.com/s/files/1/0670/6144/8998/files/510px-width-transparent_160x@2x.png?v=1667167871",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ea distinctio minima veniam omnis expedita magnam iste voluptatum velit atque necessitatibus, rerum a totam magni ab aspernatur error corrupti. Nulla.",
  },
  {
    name: "Dismount Bike Shop",
    image:
      "https://cdn.shopify.com/s/files/1/0023/1505/9318/files/DismountLogo_cef0113b-e20f-434d-8dd8-a4d27cbc448b.jpg?v=1639607077&width=500",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ea distinctio minima veniam omnis expedita magnam iste voluptatum velit atque necessitatibus, rerum a totam magni ab aspernatur error corrupti. Nulla.",
  },
];
const animationVariants = {
  initial: { y: "50px", x: 0, opacity: 0 },
  animate: {
    opacity: 1,
    y: "0px",
    x: 0,
    transition: { staggerChildren: 0.2, ease: "easeInOut", duration: 1 },
  },
};
const Sponsors = () => {
  return (
    <SectionDiv>
      <Banner
        text={"Our generous sponsors"}
        section="sponsors"
        sectionLength={1}
      />
      <motion.div
        className="flex flex-col gap-2 w-80 md:w-60 pt-3 pb-3"
        variants={animationVariants}
        initial="initial"
        animate="animate"
      >
        <motion.p variants={animationVariants}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
          sapiente iste, deleniti corporis molestiae aspernatur non fuga vel ea
          voluptatibus soluta temporibus pariatur ducimus excepturi veritatis
          tempora autem exercitationem a!
        </motion.p>

        {sponsorList.map((sponsor) => {
          const { name, image, description } = sponsor;
          return (
            <SponsorBox
              as={motion.div}
              variants={animationVariants}
              reverse={
                sponsorList.indexOf(sponsor) % 2 === 0 ? "flex-row-reverse" : ""
              }
              name={name}
              image={image}
              description={description}
              key={name}
            />
          );
        })}
      </motion.div>
    </SectionDiv>
  );
};

export default Sponsors;
