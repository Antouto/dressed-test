import { ActionRow, Button, type MessageComponentInteraction } from "dressed";
import { story } from "@/story.ts";

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
