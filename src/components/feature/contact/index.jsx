import { useEffect, useState } from "react";
import { tick } from "../../../helpers/tick";
import Spline from "@splinetool/react-spline";

import "./index.scss";

export default function Contact() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Frontend Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick(
        setDelta,
        text,
        setLoopNum,
        setIsDeleting,
        setIndex,
        toRotate,
        period,
        setText,
        isDeleting,
        loopNum
      );
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section>
      <div className="container">
        <div className="exo">
          <div className="title">
            <h1>
              {`Hi! I'm Vahe`}{" "}
              <span
                className="txt-rotate"
                dataperiod="1000"
                data-rotate='[ "Frontend Developer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
              A skilled <span>Frontend React.js Developer</span> with more than{" "}
              <span>3 years</span> of experience developing user-friendly and
              responsive web applications. Proficient in <span>React.js</span>,{" "}
              <span>Redux</span>, <span>TypeScript</span>, and{" "}
              <span>Next.js</span>, with a strong understanding of Web
              Development principles and best practices. Passionate about
              staying up-to-date with the latest technologies and industry
              trends to deliver high-quality solutions that meet client
              requirements.
            </p>
          </div>
          <Spline scene="https://prod.spline.design/S1aEBhaszdb0K7tn/scene.splinecode" />
          {/* <Spline scene="https://prod.spline.design/mj7mr04MOuA9YUpz/scene.splinecode" /> */}
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          doloremque accusamus dicta rem veniam amet voluptatibus harum iure
          impedit ad labore fuga, corrupti mollitia. Illum commodi error libero
          fuga! Libero possimus reprehenderit asperiores tempore quas odit non
          molestias, corporis consequatur fugiat accusantium, nemo minus facilis
          quo sequi. Doloremque ratione repellat odio dolor excepturi illo
          aliquam. Soluta molestiae aperiam quo corrupti magni fugit debitis
          delectus nam vitae consequatur aliquam cum reprehenderit nesciunt illo
          laudantium voluptate enim autem fugiat similique obcaecati, dolores
          vel necessitatibus est? Nihil exercitationem deleniti nemo incidunt
          laboriosam a dignissimos sunt voluptates cupiditate vitae. Ullam
          excepturi numquam blanditiis nesciunt nam repudiandae mollitia
          provident ipsum error quidem reiciendis placeat quibusdam amet fuga
          assumenda nulla, a eos modi. Voluptatem deleniti, nam soluta eos, sunt
          animi laborum, maxime dignissimos nisi quod obcaecati atque cum rerum
          inventore voluptate. Voluptatum unde et corporis asperiores facilis
          blanditiis, assumenda sunt fugiat quia deserunt ipsa deleniti omnis
          animi, obcaecati itaque molestiae dolor ex aspernatur nostrum
          perferendis? Fugiat, molestias possimus, eos voluptatibus saepe quidem
          nesciunt totam minima dolorum provident eum sapiente, nulla beatae
          officia sed perferendis quod consequatur sunt sit? Vel officiis
          consectetur aliquid sit delectus ducimus distinctio quos hic alias
          odit minus animi fugit recusandae maxime, provident minima est illum
          at soluta facilis. A earum deleniti nulla aut vel, accusamus
          laudantium. Molestias voluptatum consequatur temporibus repudiandae
          deleniti nostrum ducimus cumque quidem animi fuga. Ea eveniet natus
          est sint sequi. Eligendi, ad? Quam quis, consectetur odit asperiores
          numquam, aperiam quaerat perspiciatis earum quasi a neque vel ab
          debitis molestias nemo rem doloribus cupiditate laborum soluta? Ipsum
          eligendi, aut minima voluptatibus exercitationem accusantium modi
          dolorum doloribus nesciunt molestias praesentium deleniti dolore nemo
          consectetur repellat. Hic repudiandae iste, unde odit velit possimus
          temporibus optio corrupti nobis modi aut necessitatibus dolore,
          praesentium vero iure eaque, explicabo excepturi! Reprehenderit iusto
          asperiores quaerat, adipisci fugit sunt perspiciatis, eius est
          doloribus obcaecati placeat reiciendis, eaque labore modi aperiam
          delectus aliquam quibusdam odio ad! Itaque voluptas nihil quos?
          Placeat, corrupti commodi accusamus dolorem aut tempore ducimus,
          aliquid dignissimos repellat ullam ipsa facere assumenda libero
          ratione culpa voluptate adipisci voluptatem blanditiis a nihil fugiat
          exercitationem! Minus totam corporis cum enim dolorum autem nostrum.
          Quas architecto ducimus iste fugit ea ratione in eius, harum iusto
          quasi dolore unde dignissimos consequuntur dolor eligendi quibusdam,
          qui cupiditate! Laudantium voluptatem quam ab adipisci! Delectus
          eligendi, quasi laboriosam est vero sunt velit temporibus cumque,
          odit, sit minus. Asperiores, cumque praesentium! Rem illum aspernatur
          laboriosam pariatur non ut, error enim eius. Dolore cum molestias
          doloribus et, dolorem sint velit natus, earum, iste delectus
          laudantium unde libero omnis porro reprehenderit voluptates dicta?
          Rerum cumque deserunt quasi sed ad non veniam aspernatur laborum
          tenetur quisquam, alias dicta iste odit in dolorum quod. Beatae iure
          corrupti magni quibusdam dolores iusto neque eius obcaecati ad.
          Voluptates culpa aspernatur, facilis eos assumenda aliquid quam
          dolorem provident tempora nostrum! Nisi exercitationem eaque inventore
          veniam ex, aspernatur perspiciatis optio neque tenetur voluptas
          repellendus reiciendis quas, consectetur similique? Beatae, aut
          aspernatur. Natus, aperiam reprehenderit excepturi similique dolorum
          perferendis ipsam dolores id recusandae officia tenetur mollitia alias
          corporis est, vel deleniti? Corrupti quaerat sequi voluptates a,
          veniam sit vel magni, labore minus ex ducimus dignissimos itaque
          consequuntur dolorem culpa tenetur ea autem est inventore commodi
          odit. Ipsam quia sapiente delectus earum quo aspernatur saepe
          blanditiis ut, eaque eius dolorum aliquam hic accusantium quaerat
          quibusdam, illo possimus. Ullam esse velit harum perferendis error,
          eum odit in voluptate possimus quo minima. Maxime placeat ad
          accusantium nostrum suscipit repellendus voluptatibus, quod quibusdam
          cum eum beatae inventore ratione corporis voluptates facilis obcaecati
          rem, iure vel ipsum neque vero aspernatur dignissimos? Nemo magnam
          minima possimus ullam dolore quisquam aperiam quia quas labore, nulla
          voluptatum voluptate neque molestiae optio quo! Quod iusto labore fuga
          perspiciatis laudantium, aperiam cumque numquam doloremque, sapiente
          quasi ex facilis harum corporis odio amet adipisci voluptatem
          doloribus. Necessitatibus, natus fuga. Natus omnis in ratione? Ipsa
          consequuntur modi molestias beatae quos atque dolorem quam animi?
          Temporibus cumque praesentium ducimus quidem quasi perferendis iste
          accusantium amet molestias sunt perspiciatis quos at a porro eligendi
          neque odit ratione excepturi, eum quas minima dignissimos numquam quo.
          Magnam cum provident ad? Aut repellendus quisquam quibusdam similique.
          Quia reiciendis voluptas quam inventore minima debitis architecto
          asperiores, consequuntur rem sint, sit eaque quibusdam unde! Impedit
          sapiente nesciunt aperiam accusantium assumenda corrupti numquam
          facilis vitae laboriosam labore, sed commodi vero eum debitis totam
          consectetur necessitatibus illo in? Exercitationem asperiores sequi
          repellendus vitae! Quae labore dignissimos modi beatae, consequatur
          ipsum itaque fugit harum porro quibusdam cumque. Tempore excepturi
          consectetur aut at quisquam repellendus laudantium voluptatum amet
          minus aliquam obcaecati similique cupiditate, animi quas tempora
          consequuntur atque aspernatur eligendi in rem sit, et quo? Dolorum
          reiciendis exercitationem, ipsum aut vero doloribus sed! Perspiciatis
          cumque molestiae quae iure temporibus deleniti, minus ullam fugit
          eaque facilis dolorum cupiditate ad sed laboriosam! Nam non, ad, nisi
          labore hic neque nulla, ullam autem cumque nihil alias unde iusto
          omnis exercitationem quis ut. Consectetur quas suscipit nobis
          doloremque perferendis, aperiam facere ipsum quis at voluptatibus
          error repellendus, itaque obcaecati dolorum temporibus dicta nulla
          modi ex neque corrupti nihil dolore deserunt consequuntur excepturi.
          Animi ipsam temporibus quod, necessitatibus praesentium, labore porro
          magnam deserunt, debitis illo numquam maxime facilis at nemo totam
          dicta suscipit dolorem culpa distinctio cupiditate. Dicta quidem,
          libero illo, totam veritatis fuga velit sapiente itaque laboriosam
          eaque deserunt perspiciatis, qui praesentium ab doloremque hic ipsam
          commodi numquam adipisci eum voluptatibus! Quos nobis sit ex natus
          inventore nostrum velit dolor molestiae, obcaecati incidunt. Illum
          rerum autem minus qui porro odit libero quidem illo eum aspernatur,
          doloremque vero sunt dolorem modi accusantium earum, odio saepe
          pariatur explicabo quasi, voluptatum reiciendis nobis. Nobis odit
          minus cupiditate eos aut id dolorem, modi dignissimos aliquid
          veritatis eligendi obcaecati quaerat est vitae, animi architecto porro
          optio distinctio esse vero vel rem! Adipisci eum architecto cumque
          temporibus dolorem officia sunt velit enim laboriosam quaerat!
          Officiis non totam corporis quidem temporibus, soluta rerum dolorem
          animi, magnam nobis minima pariatur labore maxime vel deserunt natus
          esse voluptate earum nihil saepe, atque eaque necessitatibus
          molestias. Amet, enim ratione facere cupiditate ex omnis fugit earum
          placeat reprehenderit tempora, nisi, maiores maxime odio assumenda.
          Totam commodi illum facilis, voluptatem asperiores fugiat error
          eveniet dolor sunt minus beatae in distinctio modi officiis delectus
          ratione. Assumenda id dolor laudantium unde, facere quia perferendis
          veniam at neque consequuntur repudiandae officiis optio suscipit
          repellendus ipsam ullam eligendi, quo placeat dolorum temporibus magni
          ea modi quasi? Sunt deserunt voluptate quisquam magni odit, nam ullam
          tenetur, veritatis illo nemo ut iure? Recusandae maxime numquam dolor
          molestias reprehenderit incidunt accusamus commodi quidem ex nesciunt
          sunt rerum labore omnis fugit est obcaecati perferendis facere,
          doloribus eum tempora magnam exercitationem reiciendis nobis! Culpa
          explicabo quidem accusamus numquam, eos odio, laudantium ipsum
          doloremque blanditiis, possimus amet qui enim consequatur error? Harum
          mollitia nesciunt numquam omnis possimus eligendi cum aperiam sunt
          aut, magni, expedita velit! Explicabo libero delectus debitis earum
          ipsum recusandae officiis error, maxime facere! Temporibus, fugit ad?
          Distinctio, earum. Repellat omnis voluptatem tenetur, consequuntur
          natus rerum ea provident, quibusdam obcaecati, commodi iusto nam
          nihil? Necessitatibus repellat optio sit assumenda ipsam vitae a
          facere itaque culpa consequatur labore, nisi reiciendis doloremque
          totam vero sapiente exercitationem ipsum deserunt unde voluptate
          consequuntur soluta. Culpa, sint repudiandae, at possimus quo dolore
          quam tempora adipisci, doloremque sequi hic labore libero officia enim
          repellat officiis quisquam iure. Minus minima ipsa assumenda saepe
          fugit, porro sunt reiciendis accusamus eveniet. Pariatur
          exercitationem temporibus rem sint tenetur ea voluptatem consequatur
          est maxime. Dignissimos corporis consequuntur ipsa ducimus voluptatem,
          suscipit assumenda non! Dolore, cum quidem, voluptas quo quos repellat
          error, veritatis ducimus suscipit est ipsam porro placeat. Vitae
          laborum at quidem sequi qui obcaecati mollitia fuga aliquid, saepe,
          nesciunt nihil quae vero. Numquam at architecto voluptatem praesentium
          totam earum ut cumque! Voluptates asperiores dicta rem corporis libero
          illo dolor velit enim perspiciatis totam fuga magni, dignissimos
          quibusdam, necessitatibus, ad doloribus? Exercitationem culpa fugit
          dignissimos quo mollitia inventore itaque quia earum eligendi nihil
          dolore ea accusamus sunt repellat repudiandae facilis ipsa labore
          ullam nam, esse illo recusandae quas molestias autem? Ipsam deserunt
          culpa laboriosam itaque, exercitationem repellendus porro corporis
          dicta blanditiis quam sequi, illum vero? Adipisci ad distinctio
          doloribus neque dolorum nobis consectetur nostrum. Doloremque eum
          error odit minus maxime fuga quae, eos officia consectetur, doloribus
          esse. Molestiae vero quisquam vitae. Quidem natus neque vitae animi
          beatae itaque maiores exercitationem minus, placeat commodi dolores
          eum inventore cumque eos non officia laboriosam aliquid illum quis.
          Tempora rem iure laboriosam, distinctio architecto quaerat sequi saepe
          est dignissimos quibusdam nihil maiores delectus, exercitationem,
          laudantium totam sapiente culpa! Dolor distinctio velit et, placeat
          error repellat sint itaque debitis, ipsum ducimus eveniet vel fugiat
          doloribus iste hic accusamus. Velit, qui quisquam in culpa soluta
          facilis molestias impedit quam quae est. Qui labore animi eius
          accusantium, explicabo consequuntur nesciunt quisquam, incidunt
          doloribus voluptates doloremque itaque ullam nostrum aliquam dicta
          facere mollitia rerum quasi magnam cum laudantium, at eveniet
          architecto beatae? Vero atque error quidem quas facilis eligendi
          commodi cumque ipsa quae obcaecati ipsam ducimus impedit voluptates,
          totam voluptatibus autem corporis magni porro enim. Accusamus quo
          saepe quia debitis maxime numquam minima tempora qui. Velit in quia
          officia impedit vero corporis optio placeat mollitia alias a.
          Distinctio incidunt eligendi harum animi aliquam explicabo ipsum quae
          repudiandae ipsa, rerum nulla! Placeat quibusdam repellat, asperiores
          amet nemo enim! Aliquid, atque hic. Nam quod cum eveniet excepturi
          dignissimos ipsa, officiis quibusdam animi mollitia labore qui. Ab,
          quaerat nobis. Consectetur, sint eos nostrum quod vitae natus
          explicabo accusamus. Dolorum doloremque eaque recusandae ut quisquam
          numquam tempore illo rem repudiandae tenetur suscipit fuga vel est,
          sequi nulla expedita aliquid accusamus. Quos saepe vitae, laborum
          porro cupiditate suscipit quidem officia impedit unde, officiis
          accusamus eveniet dignissimos quia. Fugit consequatur dolorum
          quibusdam minima, nemo optio quaerat voluptates aperiam nam debitis
          deserunt ipsum quos? Dolorum similique distinctio autem perferendis
          illum nulla sapiente eum eligendi sint, dolor voluptate. At animi
          voluptatem eum recusandae sapiente expedita neque asperiores deserunt
          nobis, dolor quidem suscipit maiores nesciunt perferendis accusamus
          totam! Voluptatem magnam vitae explicabo voluptatum velit magni
          dignissimos cumque natus nisi perferendis quisquam beatae,
          accusantium, repellat incidunt officia in? Fugit incidunt ipsam ut non
          earum quod iusto quidem inventore et illum magni hic praesentium sed
          ratione molestias cupiditate molestiae, necessitatibus eaque. Deserunt
          maxime suscipit distinctio quibusdam minus, placeat ut, sit sunt aut
          repellendus excepturi modi! Deleniti repellat facere dolores iure
          molestiae? Iusto molestias libero quae iste commodi vel sed ipsum cum
          dolor amet aperiam similique veniam beatae et itaque rerum eos, aut
          blanditiis veritatis numquam aspernatur repellendus illo doloremque
          accusamus! Nulla, laboriosam. Suscipit aliquam, inventore possimus
          illo ut dolores delectus error est impedit ad ipsa quia! Temporibus,
          porro. Quam inventore voluptatum quasi minus architecto officia saepe.
          Blanditiis, non ducimus accusamus dolorem, fuga sequi nesciunt sed,
          laboriosam maxime dicta nam. Dolorem, animi? Cumque, error provident
          quos optio inventore maiores. Fugiat eligendi distinctio excepturi hic
          reprehenderit earum repudiandae dignissimos in velit doloremque
          delectus, impedit aspernatur sapiente doloribus odio atque maiores
          exercitationem alias? Libero itaque temporibus ad quas laboriosam et
          labore magnam consequuntur beatae nostrum esse, consequatur voluptate,
          voluptas ipsa repellat necessitatibus atque. Eum, aspernatur pariatur.
          Tempore, repellat. Provident dolorum sed dicta quo odio quaerat
          eveniet quod. Eos, accusantium! Fugiat, ipsum quae. Quasi doloremque
          delectus est officia aliquam recusandae similique facilis eligendi
          reiciendis et, quidem consequuntur, voluptates ullam corporis modi
          dicta neque tenetur accusamus. Rerum quo dolore tempore neque ut
          magnam quis doloribus quae accusantium placeat reprehenderit
          distinctio, fugit beatae nemo, ad quod laboriosam est sit, odio
          assumenda blanditiis nisi alias? Vel similique, non dignissimos et
          fuga laborum nisi quidem sequi rem, minima dolorum praesentium.
          Corporis minus, ut magnam id tempore ipsum iure, totam asperiores odio
          voluptate architecto, repellendus rem soluta pariatur porro eligendi
          quaerat doloribus aspernatur! Minima nulla iure, sunt laudantium
          dolore facere a temporibus dicta beatae necessitatibus dolorem libero!
          Esse qui fugit aliquam illum odit similique architecto labore harum
          suscipit id cum nulla, maxime eligendi expedita. Nisi ipsum sequi
          quaerat nam placeat excepturi? Aut, aperiam! Error quam maxime ut
          minus id. Odit dolor, similique rem eligendi minus cumque iste
          pariatur quaerat perspiciatis corrupti est aut beatae, quo sint sit.
        </p>
      </div>
    </section>
  );
}
