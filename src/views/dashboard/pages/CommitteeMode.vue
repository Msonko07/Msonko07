<template>
  <v-container
    id="CommitteeMode"
    fluid
    tag="section"
  >
    <v-row>
      <v-col>
        <v-card class="px-auto py-auto">
          <v-card-title>
            {{ (committee && committee.name) ? committee.name : 'test purpose' }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="4"
      >
        <template>
          <v-card height="900">
            <v-sheet class="pa-4 primary lighten-2">
              <v-text-field
                v-model="search"
                label="Rechercher un projet"
                dark
                flat
                solo-inverted
                hide-details
                clearable
                clear-icon="mdi-close-circle-outline"
              />
              <v-checkbox
                v-model="caseSensitive"
                dark
                hide-details
                label="Recherche sensible à la casse"
              />
            </v-sheet>
            <v-responsive
              class="overflow-y-auto"
              max-height="750"
            >
              <v-treeview
                :active.sync="active"
                :items="items"
                :search="search"
                :filter="filter"
                :open.sync="open"
                activatable
                active-class="secondary--text"
                open-on-click
              >
                <template v-slot:prepend="{ item }">
                  <v-icon
                    v-if="item.children"
                    v-text="`mdi-${item.id === 0 ? 'folder-multiple-outline' : 'file-document-multiple-outline'}`"
                  />
                </template>
              </v-treeview>
            </v-responsive>
          </v-card>
        </template>
      </v-col>
      <v-col
        cols="8"
      >
        <template>
          <v-card
            outlined
            height="900"
          >
            <v-sheet class="pa-1 primary lighten-2">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    class="ml-2"
                    fab
                    icon
                    v-bind="attrs"
                    v-on="on"
                    @click="analysis = !analysis"
                  >
                    <v-icon>
                      mdi-account-switch
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Infos projet / fiche de synthèse
                </span>
              </v-tooltip>
              <!--<v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    class="ml-2"
                    fab
                    icon
                    x-small
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-file-table-outline
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Fiche projet
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    class="ml-2"
                    fab
                    icon
                    x-small
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-finance
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Informations financière
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    class="ml-2"
                    fab
                    icon
                    x-small
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-shopping-outline
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Informations de marché
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ml-2"
                    dark
                    fab
                    icon
                    x-small
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-file-compare
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Fiche d'analyse
                </span>
              </v-tooltip>-->
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    class="ml-2"
                    fab
                    icon
                    v-bind="attrs"
                    :disabled="!selected"
                    v-on="on"
                    @click="openValidateCommitteeDialog(committee.id, selected.id, selected.analysis._id)"
                  >
                    <v-icon>
                      mdi-plus-box
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Décision comité
                </span>
              </v-tooltip>
            </v-sheet>
            <v-divider />
            <div
              v-if="!selected"
              class="Heading-1 grey--text text--lighten-1 font-weight-light text-center mt-10"
              style="align-self: center;"
            >
              Sélectionner un projet
            </div>
            <div v-else>
              <v-responsive
                v-if="!show_analysis"
                class="overflow-y-auto"
                max-height="800"
              >
                <v-card-text v-if="analysis">
                  <summary-sheet
                    :project="selected"
                  />
                </v-card-text>
                <v-card-text v-else>
                  <recipient-infos
                    :recipient="selected.recipient"
                  />
                  <project-infos
                    :project="selected"
                  />
                  <project-financial-infos
                    :financial="selected.financial_infos"
                  />
                  <project-market-infos
                    :market="selected.market_infos"
                  />
                </v-card-text>
              </v-responsive>
              <v-responsive
                class="overflow-y-auto"
                max-height="800"
              >
                <v-card-text />
              </v-responsive>
            </div>
          </v-card>
        </template>
      </v-col>
      <!--<v-col
        cols="2"
      >
        <template>
          <v-card
            outlined
            height="900"
          >
            <v-sheet class="pa-2 primary lighten-2">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ml-2"
                    dark
                    fab
                    icon
                    x-small
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-chart-multiple
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Statistiques
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ml-2"
                    dark
                    fab
                    icon
                    x-small
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-timeline-clock
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Historique dossier
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ml-2"
                    dark
                    fab
                    icon
                    x-small
                    v-bind="attrs"
                    v-on="on"
                    @click="analysisComment = !analysisComment"
                  >
                    <v-icon>
                      mdi-comment-text-multiple
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Commentaires
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="ml-2"
                    dark
                    fab
                    icon
                    x-small
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-account-supervisor
                    </v-icon>
                  </v-btn>
                </template>
                <span>
                  Utilisateurs
                </span>
              </v-tooltip>
            </v-sheet>
            <v-responsive
              v-if="!show_analysis"
              class="overflow-y-auto"
              max-height="800"
            >
              <v-card-text v-if="analysisComment">
                <analysis-comments
                  :analysis="selected.analysis._id"
                  :agent="agent"
                  :agents="agents"
                />
              </v-card-text>
            </v-responsive>
          </v-card>
        </template>
      </v-col>-->
    </v-row>
    <!-- Validate committee dialog -->
    <v-dialog
      v-model="validateCommitteeDialog"
      persistent
      max-width="650px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5 text-h6">Décision comité</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="committee_result.amount"
                  label="Montant*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-select
                  v-model="committee_result.interest_rate"
                  :items="[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]"
                  label="Taux d'intérêt*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  v-model="committee_result.duration"
                  label="Durée de remboursement (mois)*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="committee_result.deadline"
                  :items="['hebdomadaire', 'mensuel', 'bimestriel', 'trimestriel', 'semestriel', 'journalier', 'annuel']"
                  label="Echéance*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="committee_result.deferred"
                  label="Différé*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="committee_result.guarantees"
                  label="Garanties*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="committee_result.financial_product"
                  label="Produit financier*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="committee_result.conditions_precedent"
                  label="Condition suspensives*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col
                sm="12"
                lg="12"
                class="pt-0"
              >
                <v-card
                  v-for="(item,i) in committee_result.disbursement_plan.length"
                  :key="i"
                  class="px-2 my-1"
                  outlined
                >
                  <v-card-title class="font-weight-regular text-overline primary--text">
                    Décaissement {{ i+1 }}
                    <v-spacer />
                    <v-icon
                      v-if="item > 1"
                      color="primary"
                      @click="decPlan(i)"
                    >
                      mdi-close-box
                    </v-icon>
                    <v-icon
                      v-else
                      color="primary"
                      @click="incPlan"
                    >
                      mdi-plus-box
                    </v-icon>
                  </v-card-title>
                  <v-card-text class="text-center">
                    <v-text-field
                      v-model="committee_result.disbursement_plan[i].title"
                      class="pt-2"
                      :label="`Intitulé décaissement ${i + 1}`"
                      outlined
                      dense
                    />
                  </v-card-text>
                  <v-row
                    v-for="(detail,j) in committee_result.disbursement_plan[i].details.length"
                    :key="j"
                    class="text-center"
                  >
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="committee_result.disbursement_plan[i].details[j].description"
                        class="pt-2"
                        :label="`Description ${j + 1}`"
                        outlined
                        dense
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                    >
                      <v-text-field
                        v-model="committee_result.disbursement_plan[i].details[j].amount"
                        class="pt-2"
                        :label="`Montant ${j + 1}`"
                        rows="2"
                        outlined
                        dense
                        :append-outer-icon="`${(detail > 1) ? 'mdi-close-box' : 'mdi-plus-box'}`"
                        @click:append-outer="`${(detail > 1) ? decPlanDetail(i, j) : incPlanDetail(i)}`"
                      />
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="committee_result.decision"
                  label="Décision du comité"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="committee_result.observations"
                  label="Observation"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="committee_result.financial_institute"
                  :items="banks"
                  item-text="name"
                  item-value="id"
                  label="IFP*"
                  required
                  outlined
                  dense
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  v-model="committee_result.source_of_funding"
                  :items="['BAD', 'DER/FJ', 'AFD']"
                  label="Source de financement*"
                  required
                  outlined
                  dense
                />
              </v-col>
            </v-row>
          </v-container>
          <!--<small>*indicates required field</small>-->
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="error"
            text
            @click="closeValidateCommitteeDialog"
          >
            Fermer
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="addCommitteeResultResult"
          >
            Enregistrer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import RecipientInfos from '@/views/dashboard/component/recipient/recipient'
  import ProjectInfos from '@/views/dashboard/component/recipient/project'
  import ProjectFinancialInfos from '@/views/dashboard/component/recipient/financial'
  import ProjectMarketInfos from '@/views/dashboard/component/recipient/market'
  import SummarySheet from '@/views/dashboard/component/SummarySheet'
  // import AnalysisComments from '@/views/dashboard/component/AnalysisComments'
  export default {
    name: 'CommitteeMode',
    components: {
      RecipientInfos,
      ProjectInfos,
      ProjectFinancialInfos,
      ProjectMarketInfos,
      SummarySheet,
      // AnalysisComments,
    },
    filters: {
      formatNumber (value) {
        if (value !== null) {
          return parseInt(value, 10).toLocaleString('fr-FR')
        } else {
          return '0'
        }
      },
    },
    data: () => ({
      open: [1, 2],
      active: [],
      search: null,
      caseSensitive: false,
      show_analysis: false,
      tree: [],
      analysis: false,
      analysisComment: false,
      validateCommitteeDialog: false,
      editCommitteeResultIndex: -1,
      committee_result: {
        committee: null,
        project: null,
        analysis: null,
        amount: null,
        interest_rate: null,
        deferred: null,
        duration: null,
        deadline: null,
        guarantees: null,
        financial_product: null,
        conditions_precedent: null,
        observations: null,
        disbursement_plan: [
          {
            title: null,
            details: [
              {
                description: null,
                amount: null,
              },
            ],
          },
        ],
        decision: null,
        financial_institute: null,
        source_of_funding: null,
      },
    }),
    computed: {
      banks () {
        return this.$store.state.utilities.banks
      },
      agent () {
        return this.$store.state.agents.agent
      },
      agents () {
        return this.$store.state.agents.agents
      },
      natures () {
        return this.$store.state.utilities.natures
      },
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      },
      loading () {
        return this.$store.state.utilities.loading
      },
      committee () {
        return this.$store.state.committees.committee
      },
      committee_results () {
        return this.$store.state.committees.committee_results
      },
      projects () {
        return this.$store.state.projects.projects
      },
      regions () {
        return this.$store.state.utilities.regions
      },
      departments () {
        return this.$store.getters['utilities/departmentsInRegion'](this.committee.location.region)
      },
      towns () {
        return this.$store.getters['utilities/townsInDepartment'](this.committee.location.department)
      },
      sectors () {
        return this.$store.state.utilities.sectors
      },
      sectorsWithProject () {
        const projects = this.projects
        const totals = []
        let j = 1
        this.sectors.forEach(sector => {
          const children = []
          let sum = 0
          projects.forEach(project => {
            if (project.sectors.includes(sector.id)) {
              children.push({
                id: project.id,
                name: project.recipient.firstname + ' ' + project.recipient.lastname,
                entitled: project.entitled,
              })
              sum++
            }
          })
          if (sum > 0) {
            totals.push({
              id: j,
              name: sector.name + '(' + sum + ')',
              children: children,
            })
            j++
          }
        })
        return totals
      },
      items () {
        return [
          {
            id: 0,
            name: 'Liste des projets par secteurs',
            children: this.sectorsWithProject,
          },
        ]
      },

      // Select projects for committee section
      // Get selected project
      selectedProjects () {
        const projects = []
        for (const item of this.tree) {
          const project = this.projects.find(value => value.id === item.id)

          if (!project) continue

          projects.push(project)
        }
        return projects
      },
      // Show the tree
      shouldShowTree () {
        return this.projects.length > 0
      },
      selected () {
        if (!this.active.length) return undefined
        const id = this.active[0]
        return this.projects.find(item => item.id === id)
      },
    },
    watch: {
      committee: function (val) {
        if (val instanceof Object) {
          this.loadProjects(val)
        }
      },
    },
    async beforeCreate () {
      const id = this.$route.params.committeeId
      await this.$store.dispatch('committees/fetchCommittee', id)
      await this.$store.dispatch('committees/fetchCommitteeResults', id)
      await this.$store.dispatch('agents/fetchAgents')
    },
    methods: {
      async loadProjects (committee) {
        const projects = []
        await committee.projects.forEach(item => projects.push(item.project))
        // window.console.log({ projectsInC: projects })
        await this.$store.dispatch('projects/fetchProjectInCommittee', JSON.stringify(projects))
        this.selectProject = true
      },
      incPlan () {
        this.committee_result.disbursement_plan.push(
          {
            title: null,
            details: [
              { description: null, amount: null },
            ],
          },
        )
      },
      incPlanDetail (plan) {
        this.committee_result.disbursement_plan[plan].details.push({ description: null, amount: null })
      },
      decPlan (i) {
        this.committee_result.disbursement_plan.splice(i, 1)
      },
      decPlanDetail (plan, i) {
        this.committee_result.disbursement_plan[plan].details.splice(i, 1)
      },
      openValidateCommitteeDialog (committee, project, analysis) {
        const index = this.committee_results.findIndex(item => item.project === project)
        if (index > -1) {
          this.editCommitteeResultIndex = index
          this.committee_result = Object.assign({}, this.committee_results[index])
        } else {
          this.committee_result.committee = committee
          this.committee_result.project = project
          this.committee_result.analysis = analysis
        }
        this.validateCommitteeDialog = true
      },
      closeValidateCommitteeDialog () {
        this.validateCommitteeDialog = false
        this.editCommitteeResultIndex = -1
        this.committee_result = Object.assign({}, {
          committee: null,
          project: null,
          analysis: null,
          amount: null,
          interest_rate: null,
          deferred: null,
          duration: null,
          deadline: null,
          guarantees: null,
          financial_product: null,
          conditions_precedent: null,
          observations: null,
          disbursement_plan: [
            {
              title: null,
              details: [
                {
                  description: null,
                  amount: null,
                },
              ],
            },
          ],
          decision: null,
          financial_institute: null,
          source_of_funding: null,
        })
      },
      async addCommitteeResultResult () {
        await this.$store.dispatch('committees/saveCommitteeResult', { result: this.committee_result, editedIndex: this.editCommitteeResultIndex })
        this.closeValidateCommitteeDialog()
      },
    },
  }
</script>

<style scoped>

</style>
