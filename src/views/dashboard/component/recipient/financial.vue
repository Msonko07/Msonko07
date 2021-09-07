<template>
  <v-container
    id="financial-infos"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <base-material-card
          color="primary"
          inline
          title="Informations financière du projet"
          class="px-5 py-1"
        >
          <v-simple-table>
            <tbody>
              <tr>
                <td class="text-overline">
                  Coût du projet
                </td>
                <td>{{ financial.project_cost | formatNumber }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Montant sollicité
                </td>
                <td>{{ financial.amount_requested | formatNumber }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Apport en BFR
                </td>
                <td>{{ financial.amount_contributed_in_bfr | formatNumber }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Apport en investissement
                </td>
                <td>{{ financial.investment_contribution_amount | formatNumber }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Garanties
                </td>
                <td>{{ financial.guarantee }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Durée du prêt
                </td>
                <td>{{ financial.term_of_the_loan }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Différé
                </td>
                <td>{{ financial.deferred }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Montant remboursé
                </td>
                <td>{{ financial.amount_reimbursed | formatNumber }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Durée du prêt
                </td>
                <td>{{ financial.term_of_the_loan }}</td>
              </tr>
              <tr>
                <td class="text-overline">
                  Dettes en cours
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in financial.outstanding_debt"
                    :key="i"
                  >
                    <v-col>
                      <strong>Montant total :</strong> {{ item.total_amount | formatNumber }}
                    </v-col>
                    <v-col>
                      <strong>Montant dû :</strong> {{ item.amount_due | formatNumber }}
                    </v-col>
                    <v-col>
                      <strong>Fréquence :</strong> {{ item.debt_frequency }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Délais de paiement des clients
                </td>
                <td>
                  {{ financial.customer_payment_terms }}
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Délais de paiement des fourniseurs
                </td>
                <td>
                  {{ financial.supplier_payment_terms }}
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Investissements
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in financial.investments"
                    :key="i"
                  >
                    <v-col>
                      <strong>Année :</strong> {{ item.year }}
                    </v-col>
                    <v-col>
                      <strong>Libellé :</strong> {{ item.wording }}
                    </v-col>
                    <v-col>
                      <strong>Prix unitaire :</strong> {{ item.unit_price | formatNumber }}
                    </v-col>
                    <v-col>
                      <strong>Quantité :</strong> {{ item.quantity }}
                    </v-col>
                    <v-col>
                      <strong>Nature :</strong> {{ natures.find(nature => nature.id === item.nature).name }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Charges personnel
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in financial.personal_charges"
                    :key="i"
                  >
                    <v-col>
                      <strong>Type de poste :</strong> {{ item.position_type }}
                    </v-col>
                    <v-col>
                      <strong>Fonction :</strong> {{ item.role }}
                    </v-col>
                    <v-col>
                      <strong>Nombre d'employés :</strong> {{ item.number_of_employees }}
                    </v-col>
                    <v-col>
                      <strong>Salaire Net :</strong> {{ item.net_salary | formatNumber }}
                    </v-col>
                    <v-col>
                      <strong>Description :</strong> {{ item.description }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Charges externes
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in financial.external_charges"
                    :key="i"
                  >
                    <v-col>
                      <strong>Année :</strong> {{ item.year }}
                    </v-col>
                    <v-col>
                      <strong>Libellé :</strong> {{ item.wording }}
                    </v-col>
                    <v-col>
                      <strong>Prix unitaire :</strong> {{ item.unit_price | formatNumber }}
                    </v-col>
                    <v-col>
                      <strong>Quantité :</strong> {{ item.quantity }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Coûts de production
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in financial.production_costs"
                    :key="i"
                  >
                    <v-col>
                      <strong>Année :</strong> {{ item.year }}
                    </v-col>
                    <v-col>
                      <strong>Libellé :</strong> {{ item.wording }}
                    </v-col>
                    <v-col>
                      <strong>Prix unitaire :</strong> {{ item.unit_price | formatNumber }}
                    </v-col>
                    <v-col>
                      <strong>Quantité :</strong> {{ item.quantity }}
                    </v-col>
                  </v-row>
                </td>
              </tr>
              <tr>
                <td class="text-overline">
                  Chiffre d'affaires
                </td>
                <td>
                  <v-row
                    v-for="(item,i) in financial.turnover"
                    :key="i"
                  >
                    <v-col>
                      <strong>Année :</strong> {{ item.year }}
                    </v-col>
                    <v-col>
                      <strong>Libellé :</strong> {{ item.wording }}
                    </v-col>
                    <v-col>
                      <strong>Prix unitaire :</strong> {{ item.unit_price | formatNumber }}
                    </v-col>
                    <v-col>
                      <strong>Quantité :</strong> {{ item.quantity }}
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
    name: 'FinancialInfos',
    filters: {
      formatNumber (value) {
        if (value !== null) {
          return parseInt(value, 10).toLocaleString('fr-FR')
        } else {
          return '0'
        }
      },
    },
    props: {
      financial: {
        type: Object,
        required: true,
      },
    },
    computed: {
      natures () {
        return this.$store.state.utilities.natures
      },
    },
  }
</script>

<style scoped>

</style>
