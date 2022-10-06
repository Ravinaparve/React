export function Profile({
  imgurl,
  size = 70,
  name,
  profession,
  discovery,
  awards
}) {
  return (
    <>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={"https://i.imgur.com/" + imgurl + "s.jpg"}
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>
            {awards.join(",")}
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
    </>
  );
}

export default function Gallery() {
  return (
    <div>
      <h2>Notable Scientists</h2>
      <Profile
        imgurl="szV5sdG"
        size="70"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal"
        ]}
      />

      <Profile
        imgurl="YfeOqp2"
        size="70"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}
