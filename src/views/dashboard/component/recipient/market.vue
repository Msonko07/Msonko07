<template>
  <v-container
    id="market-infos"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Informations de marché du projet"
          class="px-5 py-1"
        >
          <v-simple-table>
            <tbody>
              <tr>
                <td class="text-overline">
                  Clients cible
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in market.target_customers"
                    :key="i"
                  >
                    <v-col>
                      <strong>Nom :</strong> {{ item.name }}
                    </v-col>
                    <v-col>
                      <strong>Comportement :</strong> {{ item.behavior }}
                    </v-col>
                    <v-col>
                      <strong>Stratégie :</strong> {{ item.strategy }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Concurrents
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in market.competitors"
                    :key="i"
                  >
                    <v-col>
                      <strong>Nom :</strong> {{ item.name }}
                    </v-col>
                    <v-col>
                      <strong>Type :</strong> {{ item.type }}
                    </v-col>
                    <v-col>
                      <strong>Description :</strong> {{ item.description }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Cannaux de distribution
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in market.distribution_channels"
                    :key="i"
                  >
                    <v-col>
                      <strong>Cannal :</strong> {{ item.channel }}
                    </v-col>
                    <v-col>
                      <strong>Description :</strong> {{ item.description }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'MarketInfos',
    props: {
      market: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style scoped>

</style>
