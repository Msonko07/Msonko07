<template>
  <v-container
    id="key-numbers"
    fluid
    tag="section"
  >
    <base-material-card
      inline
      icon="mdi-finance"
      title="INFORMATIONS FINANCIERES"
      class="px-5 py-3"
    >
      <v-divider />
      <v-simple-table fixed-header>
        <tbody>
          <tr>
            <td
              colspan="2"
              class="text-left text-overline"
            >
              Coût global du projet
            </td>
            <td
              class="text-right"
            >
              13,395,218
            </td>
          </tr>
          <tr>
            <td
              colspan="3"
              class="text-center text-overline"
            >
              Montant des investissements déjà réalisés
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              class="text-left text-overline"
            >
              Apport personnel
            </td>
            <td
              class="text-right"
            >
              0
            </td>
          </tr>
          <tr>
            <td
              rowspan="6"
              class="text-left text-overline"
            >
              Nature des investissements
            </td>
            <td>
              Frais d'établissement et recherches, brevets, logiciels
            </td>
            <td
              class="text-right"
            >
              700,000
            </td>
          </tr>
          <tr>
            <td>
              Travaux / aménagements/Construction
            </td>
            <td
              class="text-right"
            >
              200,000
            </td>
          </tr>
          <tr>
            <td>
              Matériel d'exploitation et outillage
            </td>
            <td
              class="text-right"
            >
              8,285,000
            </td>
          </tr>
          <tr>
            <td>
              Mobilier de bureau et ordinateur
            </td>
            <td
              class="text-right"
            >
              0
            </td>
          </tr>
          <tr>
            <td>
              Véhicule
            </td>
            <td
              class="text-right"
            >
              0
            </td>
          </tr>
          <tr>
            <td
              class="text-left text-overline"
            >
              Autres investissements
            </td>
            <td
              class="text-right"
            >
              2,350,000
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              class="text-left text-overline"
            >
              TOTAL INVESTISSEMENTS
            </td>
            <td
              class="text-right"
            >
              11,535,000
            </td>
          </tr>
          <tr>
            <td
              rowspan="3"
              class="text-left text-overline"
            >
              Besoin en fond de roulement
            </td>
            <td>
              Charges de personnel
            </td>
            <td
              class="text-right"
            >
              494,118
            </td>
          </tr>
          <tr>
            <td>
              Charges de production
            </td>
            <td
              class="text-right"
            >
              950,000
            </td>
          </tr>
          <tr>
            <td>
              Charges externes
            </td>
            <td
              class="text-right"
            >
              416,100
            </td>
          </tr>
          <tr>
            <td
              colspan="2"
              class="text-left text-overline"
            >
              TOTAL BFR
            </td>
            <td
              class="text-right"
            >
              1,860,218
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
  </v-container>
</template>

<script>
  export default {
    name: 'KeyNumbers',
  }
</script>

<style scoped>

</style>
