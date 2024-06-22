import { AppContext } from "@/AppContext";
import WindowBorder from "@/components/desktop/Window";
import { useContext } from "react";

const Home = () => {
  const { lang } = useContext(AppContext);

  return (
    <>
      <WindowBorder title={lang.home.title}>
        {/* Title */}
        <div className="flex flex-col justify-center items-start border-b-blue w-full border-b-2">
          <h3 className="text-black text-xl">{lang.home.title_card}</h3>
          <h4 className="text-black text-base">{lang.home.introduction}</h4>
        </div>

        {/* Content */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus
          orci, eleifend sed dui non, rhoncus faucibus purus. Nullam at turpis
          non nulla tincidunt gravida hendrerit nec orci. Aliquam cursus maximus
          justo eu ultrices. Nulla elit lectus, viverra consequat semper vel,
          rutrum mollis dui. Curabitur nec purus aliquet, vulputate quam in,
          consectetur nunc. Aenean aliquam fringilla risus, eget imperdiet velit
          molestie eu. Integer non hendrerit erat, vitae porttitor tellus.
          Suspendisse eu sapien ultrices, tristique enim vitae, consectetur
          enim. Nullam ut scelerisque nisl, eu suscipit lorem. Nullam mattis
          finibus egestas. Fusce in tincidunt eros. Maecenas sollicitudin massa
          luctus, auctor ex id, hendrerit nibh. Aenean in nunc et augue aliquet
          viverra. Mauris neque felis, porta a aliquet id, placerat a mi. Nulla
          nec dignissim eros. Aliquam tincidunt diam nec turpis fermentum, id
          tincidunt mi rutrum. Quisque egestas lacinia tellus in mollis. Sed
          sapien purus, faucibus dictum eros sed, suscipit hendrerit purus. Sed
          dignissim ex et dapibus finibus. Phasellus condimentum lobortis
          ullamcorper. Aenean fringilla nunc quis turpis pellentesque, a
          pharetra quam vulputate. Aliquam id fermentum augue. Curabitur
          lobortis ante id dolor sagittis, nec ultrices mauris suscipit.
          Pellentesque felis libero, semper sed est eu, pretium condimentum
          enim. Integer ac justo dui. Mauris sagittis non ante vel vestibulum.
          Nulla sit amet pellentesque purus, quis consectetur nibh. Mauris
          dictum, enim non mollis varius, est augue ultricies felis, quis
          sagittis leo turpis at nisl. Nullam viverra finibus augue, ac bibendum
          mi fringilla at. Etiam eu est sed eros euismod mollis. Curabitur
          finibus, mi sed ornare malesuada, sem sapien pulvinar est, ac bibendum
          sem tortor quis libero. Suspendisse vel finibus nisl. Pellentesque
          vestibulum commodo ex, quis auctor nisl iaculis commodo. Curabitur
          lectus ligula, lobortis non dui quis, vulputate laoreet magna. Morbi
          tempus ex vitae orci faucibus, in interdum tellus pharetra. Aenean
          tempor egestas odio. Ut eget libero nibh. Morbi id laoreet nulla.
          Vestibulum nec massa elit. Phasellus fringilla urna nec leo luctus
          viverra. Aliquam viverra, sem sed commodo sagittis, ligula metus
          accumsan massa, et cursus orci quam ac urna. Quisque a varius metus.
          Donec vitae eros pellentesque dolor sagittis interdum et eget elit.
          Vestibulum volutpat dignissim rhoncus. Integer commodo eleifend diam,
          ac vulputate nisi ullamcorper eget. Morbi tempus luctus sagittis.
          Phasellus vitae nulla nec dolor porta imperdiet quis non urna. Morbi
          facilisis ipsum mattis dui fermentum rutrum. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Donec rhoncus, mauris et
          suscipit ultrices, ante enim convallis lacus, sit amet maximus ipsum
          nibh in est. Nam at turpis nibh. Sed at magna viverra, tempor metus
          sit amet, semper lectus. Vestibulum malesuada molestie nisi eu mattis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus
          orci, eleifend sed dui non, rhoncus faucibus purus. Nullam at turpis
          non nulla tincidunt gravida hendrerit nec orci. Aliquam cursus maximus
          justo eu ultrices. Nulla elit lectus, viverra consequat semper vel,
          rutrum mollis dui. Curabitur nec purus aliquet, vulputate quam in,
          consectetur nunc. Aenean aliquam fringilla risus, eget imperdiet velit
          molestie eu. Integer non hendrerit erat, vitae porttitor tellus.
          Suspendisse eu sapien ultrices, tristique enim vitae, consectetur
          enim. Nullam ut scelerisque nisl, eu suscipit lorem. Nullam mattis
          finibus egestas. Fusce in tincidunt eros. Maecenas sollicitudin massa
          luctus, auctor ex id, hendrerit nibh. Aenean in nunc et augue aliquet
          viverra. Mauris neque felis, porta a aliquet id, placerat a mi. Nulla
          nec dignissim eros. Aliquam tincidunt diam nec turpis fermentum, id
          tincidunt mi rutrum. Quisque egestas lacinia tellus in mollis. Sed
          sapien purus, faucibus dictum eros sed, suscipit hendrerit purus. Sed
          dignissim ex et dapibus finibus. Phasellus condimentum lobortis
          ullamcorper. Aenean fringilla nunc quis turpis pellentesque, a
          pharetra quam vulputate. Aliquam id fermentum augue. Curabitur
          lobortis ante id dolor sagittis, nec ultrices mauris suscipit.
          Pellentesque felis libero, semper sed est eu, pretium condimentum
          enim. Integer ac justo dui. Mauris sagittis non ante vel vestibulum.
          Nulla sit amet pellentesque purus, quis consectetur nibh. Mauris
          dictum, enim non mollis varius, est augue ultricies felis, quis
          sagittis leo turpis at nisl. Nullam viverra finibus augue, ac bibendum
          mi fringilla at. Etiam eu est sed eros euismod mollis. Curabitur
          finibus, mi sed ornare malesuada, sem sapien pulvinar est, ac bibendum
          sem tortor quis libero. Suspendisse vel finibus nisl. Pellentesque
          vestibulum commodo ex, quis auctor nisl iaculis commodo. Curabitur
          lectus ligula, lobortis non dui quis, vulputate laoreet magna. Morbi
          tempus ex vitae orci faucibus, in interdum tellus pharetra. Aenean
          tempor egestas odio. Ut eget libero nibh. Morbi id laoreet nulla.
          Vestibulum nec massa elit. Phasellus fringilla urna nec leo luctus
          viverra. Aliquam viverra, sem sed commodo sagittis, ligula metus
          accumsan massa, et cursus orci quam ac urna. Quisque a varius metus.
          Donec vitae eros pellentesque dolor sagittis interdum et eget elit.
          Vestibulum volutpat dignissim rhoncus. Integer commodo eleifend diam,
          ac vulputate nisi ullamcorper eget. Morbi tempus luctus sagittis.
          Phasellus vitae nulla nec dolor porta imperdiet quis non urna. Morbi
          facilisis ipsum mattis dui fermentum rutrum. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Donec rhoncus, mauris et
          suscipit ultrices, ante enim convallis lacus, sit amet maximus ipsum
          nibh in est. Nam at turpis nibh. Sed at magna viverra, tempor metus
          sit amet, semper lectus. Vestibulum malesuada molestie nisi eu mattis.
        </p>
      </WindowBorder>
    </>
  );
};

export default Home;
