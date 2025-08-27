import type { CommandInteraction } from "dressed";

export default function panel(interaction: CommandInteraction) {
  return interaction.reply({
    components: [{
      type: 1,
      components: [{
        type: 2,
        label: 'test',
        style: 1,
        custom_id: 'test'   
      }]
    }]
  })
}
