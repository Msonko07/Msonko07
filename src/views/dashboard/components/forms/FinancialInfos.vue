<template>
  <v-form
    class="mt-5"
  >
    <v-row>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.project_cost"
          label="Coût du projet"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.amount_requested"
          label="Montant sollicité"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.capital"
          label="Capital"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.amount_contributed_in_bfr"
          label="Apport en BFR"
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.investment_contribution_amount"
          label="Apport en investissement"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.contribution_on_cost"
          label="Apport sur coût"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.guarantee"
          label="Garantie"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.term_of_the_loan"
          label="Durée du prêt"
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.deferred"
          label="Différé"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.amount_reimbursed"
          label="Montant remboursé"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.customer_payment_terms"
          label="Délais de paiement client"
          outlined
          dense
        />
      </v-col>
      <v-col
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-text-field
          v-model="financialInfo.supplier_payment_terms"
          label="Délais de paiement fournisseur"
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Dette(s) en cours
            <v-spacer />
            <v-icon
              color="primary"
              @click="incOutstandingDebt"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in financialInfo.outstanding_debt.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.outstanding_debt[i].total_amount"
                label="Montant total"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.outstanding_debt[i].amount_due"
                label="Montant dû"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="4"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.outstanding_debt[i].debt_frequency"
                label="Périodicité"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decOutstandingDebt(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Investissement(s)
            <v-spacer />
            <v-icon
              color="primary"
              @click="incInvestments"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in financialInfo.investments.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="2"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.investments[i].year"
                label="Année"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.investments[i].wording"
                label="Libellé"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="2"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.investments[i].unit_price"
                label="Prix unitaire"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="2"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.investments[i].quantity"
                label="Quantité"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-select
                v-model="financialInfo.investments[i].nature"
                :items="natures"
                item-text="name"
                item-value="id"
                label="Nature"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decInvestments(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Charge en personnel
            <v-spacer />
            <v-icon
              color="primary"
              @click="incPersonalCharges"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in financialInfo.personal_charges.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.personal_charges[i].position_type"
                label="Type de poste"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="2"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.personal_charges[i].role"
                label="Fonction"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="2"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.personal_charges[i].number_of_employees"
                label="Nombre de personne"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="2"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.personal_charges[i].net_salary"
                label="Salaire Net"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.personal_charges[i].description"
                label="Description"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decPersonalCharges(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Charge(s) externe
            <v-spacer />
            <v-icon
              color="primary"
              @click="incExternalCharges"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in financialInfo.external_charges.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.external_charges[i].year"
                label="Année"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.external_charges[i].wording"
                label="Libellé"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.external_charges[i].unit_price"
                label="Prix unitaire"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.external_charges[i].quantity"
                label="Quantité"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decExternalCharges(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Coût(s) de production(s)
            <v-spacer />
            <v-icon
              color="primary"
              @click="incProductionCosts"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in financialInfo.production_costs.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.production_costs[i].year"
                label="Année"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.production_costs[i].wording"
                label="Libellé"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.production_costs[i].unit_production_cost"
                label="CPU"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.production_costs[i].quantity"
                label="Quantité"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decProductionCosts(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        sm="12"
        lg="12"
        class="pt-0"
      >
        <v-card
          class="px-2 my-1"
          outlined
        >
          <v-card-title class="font-weight-regular text-overline primary--text">
            Chiffre(s) d'affaire
            <v-spacer />
            <v-icon
              color="primary"
              @click="incTurnover"
            >
              mdi-plus-box
            </v-icon>
          </v-card-title>
          <v-row
            v-for="(item,i) in financialInfo.turnover.length"
            :key="i"
          >
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.turnover[i].year"
                label="Année"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.turnover[i].wording"
                label="Libellé"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.turnover[i].unit_price"
                label="Prix unitaire"
                outlined
                dense
              />
            </v-col>
            <v-col
              sm="6"
              lg="3"
              class="pt-0"
            >
              <v-text-field
                v-model="financialInfo.turnover[i].quantity"
                label="Quantité"
                :append-outer-icon="`${(item > 1) ? 'mdi-delete-outline' : ''}`"
                outlined
                dense
                @click:append-outer="`${(item > 1) ? decTurnover(i) : ''}`"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
  export default {
    name: 'FinancialInfos',
    data () {
      return {
        financialInfo: {
          capital: null,
          project_cost: null,
          amount_requested: null,
          amount_contributed_in_bfr: null,
          investment_contribution_amount: null,
          contribution_on_cost: null,
          guarantee: null,
          term_of_the_loan: null,
          deferred: null,
          amount_reimbursed: null,
          outstanding_debt: [{ total_amount: null, amount_due: null, debt_frequency: null }],
          customer_payment_terms: null,
          supplier_payment_terms: null,
          investments: [{ year: null, wording: null, unit_price: null, quantity: null, nature: null }],
          personal_charges: [{ position_type: null, role: null, number_of_employees: null, net_salary: null, description: null }],
          external_charges: [{ year: null, wording: null, unit_price: null, quantity: null }],
          production_costs: [{ year: null, wording: null, unit_production_cost: null, quantity: null }],
          turnover: [{ year: null, wording: null, unit_price: null, quantity: null }],
        },
      }
    },
    computed: {
      natures () {
        return this.$store.state.utilities.natures
      },
    },
    watch: {
      financialInfo: {
        immediate: true,
        deep: true,
        handler (val) {
          this.$emit('update', val)
        },
      },
    },
    methods: {
      incOutstandingDebt () {
        this.financialInfo.outstanding_debt.push({ total_amount: null, amount_due: null, debt_frequency: null })
      },
      decOutstandingDebt (i) {
        this.financialInfo.outstanding_debt.splice(i, 1)
      },
      incInvestments () {
        this.financialInfo.investments.push({ year: null, wording: null, unit_price: null, quantity: null, nature: null })
      },
      decInvestments (i) {
        this.financialInfo.investments.splice(i, 1)
      },
      incPersonalCharges () {
        this.financialInfo.personal_charges.push({ position_type: null, role: null, number_of_employees: null, net_salary: null, description: null })
      },
      decPersonalCharges (i) {
        this.financialInfo.personal_charges.splice(i, 1)
      },
      incExternalCharges () {
        this.financialInfo.external_charges.push({ year: null, wording: null, unit_price: null, quantity: null })
      },
      decExternalCharges (i) {
        this.financialInfo.external_charges.splice(i, 1)
      },
      incProductionCosts () {
        this.financialInfo.production_costs.push({ year: null, wording: null, unit_production_cost: null, quantity: null })
      },
      decProductionCosts (i) {
        this.financialInfo.production_costs.splice(i, 1)
      },
      incTurnover () {
        this.financialInfo.turnover.push({ year: null, wording: null, unit_price: null, quantity: null })
      },
      decTurnover (i) {
        this.financialInfo.turnover.splice(i, 1)
      },
    },
  }
</script>

<style scoped>

</style>
