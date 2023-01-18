import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Someone New",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/41619d032f80a089e2c99e98953d441fd061ef12-1024x1024.jpg",
      artist: "less.people",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=47641",
      color: ["#dac399", "#726765"],
      id: uuidv4(),
      active: true,
    },

    {
      name: "Nightcrawler",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg",
      artist: "Teddy Roxpin",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=45232",
      color: ["#7f5c36", "#35251c"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Envy You",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/08/113a9b73235cab31646ef0059864aec70e793dd2-1024x1024.jpg",
      artist: "J.Folk",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=43906",
      color: ["#dbc9aa", "#77c6a4"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Noir de Jais",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/05/5158b15bf8cb3b9d50588cfc31d36d28c816dc0c-1024x1024.jpg",
      artist: "sadtoi",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=35667",
      color: ["#dab2f9", "#422dd1"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Just Put Up Some String Lights",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/09/2ce75252f5419a45d76bb93424ac1eae3e688b17-1024x1024.jpg",
      artist: "Sleepy Fish",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24823",
      color: ["#f8521e", "#2766a2"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Arthur in Snow",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/01/4a42f136486d42e4d021c673540885c82a1934e6-1024x1024.jpg",
      artist: "Sleepy Fish, coa",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=36921",
      color: ["#eab566", "#9d1b0f"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Places",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/07/034f52eeaeceb144cca67b0930d705d32fc39e37-1024x1024.jpg",
      artist: "Ruck P",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20563",
      color: ["#fcaf5d", "#644f78"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
