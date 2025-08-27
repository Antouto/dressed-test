import { Button, Container, Section, TextDisplay, type CommandInteraction } from "dressed";

// export default function panel(interaction: CommandInteraction) {
//   return interaction.reply({
//     components: [{
//       type: 1,
//       components: [{
//         type: 2,
//         label: 'test',
//         style: 1,
//         custom_id: 'test'   
//       }]
//     }]
//   })
// }

export default async function (interaction: CommandInteraction) {
  await interaction.deferReply({ ephemeral: true });
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = (await res.json()) as { title: string; completed: boolean }[];
  await interaction.editReply({
    flags: 1 << 15,
    components: [
      Container(
        TextDisplay("Todos"),
        ...todos
          .slice(0, 5)
          .map((t) =>
            Section(
              [t.title],
              Button({
                custom_id: t.title,
                emoji: { name: t.completed ? "✅" : "❌" },
                style: "Secondary",
              })
            )
          )
      ),
    ],
  });
}