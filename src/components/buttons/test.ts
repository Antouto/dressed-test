import { type MessageComponentInteraction } from "dressed";

export default function test(interaction: MessageComponentInteraction) {
  return interaction.showModal({
    title: "test",
    custom_id: "test",
    components: [{
      type: 1,
      components: [{
        type: 4,
        label: "test",
        style: 1,
        custom_id: "test"
      }]
    }]
  })
}
