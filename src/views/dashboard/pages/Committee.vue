<template>
  <v-container
    id="Committee"
    fluid
    tag="section"
  >
    <v-row
      dense
      justify="end"
      class="mx-5"
    >
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Nouveau comité
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">
              {{ committeeFormTitle }}
            </span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="committee.name"
                    label="Titre*"
                    hint="Minimum 10 caractères"
                    persistent-hint
                    outlined
                    dense
                    required
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="committee.description"
                    label="Description*"
                    hint="Minimum 30 caractères"
                    persistent-hint
                    outlined
                    dense
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                >
                  <v-menu
                    v-model="dateMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="computedDateFormatted"
                        label="Date prévu"
                        append-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        outlined
                        dense
                        required
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="committee.scheduled"
                      no-title
                      @input="dateMenu = false"
                    />
                  </v-menu>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-select
                    v-model="committee.location.region"
                    :items="regions"
                    item-text="name"
                    item-value="id"
                    label="Région*"
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
                    v-model="committee.location.department"
                    :items="departments"
                    item-text="name"
                    item-value="id"
                    label="Département*"
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
                    v-model="committee.location.town"
                    :items="towns"
                    item-text="name"
                    item-value="id"
                    label="Commune*"
                    outlined
                    dense
                  />
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="committee.sectors"
                    :items="sectors"
                    item-text="name"
                    item-value="id"
                    label="Secteur(s)"
                    outlined
                    dense
                    multiple
                  />
                </v-col>
              </v-row>
            </v-container>
            <small>*indique les champs obligatoire</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="info"
              text
              @click="onCancel"
            >
              Annuler
            </v-btn>
            <v-btn
              color="primary"
              depressed
              :disabled="!validateCommittee"
              @click="saveCommittee"
            >
              {{ committeeFormAction }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row>
      <template v-for="(item, i) in committees">
        <v-col
          :key="i"
          cols="12"
          md="3"
        >
          <v-card
            :color="!item.status.activated.state ? 'elevation-0' : null"
            :light="item.status.activated.state"
            class="v-card--plan mx-auto pt-1 pb-1 px-2 text-center"
            max-width="100%"
            height="230"
            :outlined="!item.status.activated.state"
          >
            <div
              class="text-body-2 text-uppercase grey--text"
              v-text="item.name"
            />
            <h2
              class="text-body-1 font-weight-light"
            >
              {{ item.sectors.map(sector => sectors.find(sectorsItem => sectorsItem.id === sector).name).join(' - ') }}
            </h2>
            <div
              class="text-body-1 text-uppercase grey--text"
            >
              {{ regions.find(regionsItem => regionsItem.id === item.location.region).name }} - {{ allDepartments.find(departmentsItem => departmentsItem.id === item.location.department).name }} - {{ allTowns.find(townsItem => townsItem.id === item.location.town).name }}
            </div>
            <div
              class="text-body-1 text-uppercase grey--text"
            >
              {{ item.scheduled | formatDate }}
            </div>

            <v-card-text
              class="text-body-1 font-weight-light pa-1"
            >
              {{ (item.description.length > 40) ? item.description.substr(0, 40) + '...' : item.description }}
            </v-card-text>
            <v-card-actions>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="info"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="editCommittee(item)"
                  >
                    mdi-circle-edit-outline
                  </v-icon>
                </template>
                <span>
                  Modifier le comité
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="openSelectAgentDialog(item.id)"
                  >
                    mdi-account-multiple-outline
                  </v-icon>
                </template>
                <span>
                  Inviter des agents
                </span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    :color="(item.status.activated.state) ? 'grey' : 'green'"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="openActivateCommittee(item.id, item.name, (item.status.activated.state) ? 'enabled' : 'disabled')"
                  >
                    mdi-checkbox-marked-circle-outline
                  </v-icon>
                </template>
                <span v-text="(item.status.activated.state) ? 'Désactiver le comité' : 'Activer le comité'" />
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="loadProjectsToAssign(item.sectors, item.id)"
                  >
                    mdi-plus-box-multiple
                  </v-icon>
                </template>
                <span>
                  affecter des projets au comité
                </span>
              </v-tooltip>
              <v-spacer />
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="enterCommittee(item.id)"
                  >
                    mdi-page-next
                  </v-icon>
                </template>
                <span>
                  mode comité
                </span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>
    </v-row>
    <!-- Loading dialog-->
    <v-dialog
      v-model="loading"
      persistent
      width="300"
    >
      <v-card
        color="secondary"
        dark
      >
        <v-card-text class="white--text text-body-1">
          Veuillez patienter s'il vous plait...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- Select project dialog -->
    <v-dialog
      v-model="selectProject"
      persistent
      width="900"
    >
      <v-card>
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-icon>mdi-file-cabinet</v-icon>
          <v-toolbar-title>Affecter des projets au comité</v-toolbar-title>
          <v-spacer />
          <v-icon
            x-large
            @click="closeSelectProjectDialog"
          >
            mdi-close
          </v-icon>
        </v-toolbar>

        <v-row>
          <v-col>
            <v-card-text>
              <v-treeview
                v-model="project_tree"
                :items="projectItems"
                selected-color="primary"
                open-on-click
                selectable
                return-object
                expand-icon="mdi-chevron-down"
                on-icon="mdi-checkbox-marked-outline"
                off-icon="mdi-checkbox-blank-outline"
                indeterminate-icon="mdi-minus-box-outline"
              />
            </v-card-text>
          </v-col>

          <v-divider vertical />

          <v-col
            cols="12"
            md="6"
          >
            <v-card-text>
              <div
                v-if="project_tree.length === 0"
                class="text-h6 font-weight-light grey--text mt-10 pa-4 text-center"
              >
                Sélectionner le(s) projet(s) à présenter au comité
              </div>

              <v-scroll-x-transition
                group
                hide-on-leave
              >
                <v-chip
                  v-for="(selection, i) in selectedProjects"
                  :key="i"
                  color="primary"
                  dark
                  class="ma-1"
                >
                  <v-icon
                    left
                    small
                  >
                    mdi-file
                  </v-icon>
                  {{ selection.entitled }} ({{ selection.recipient.firstname }} {{ selection.recipient.lastname }})
                </v-chip>
              </v-scroll-x-transition>
            </v-card-text>
          </v-col>
        </v-row>

        <v-divider />

        <v-card-actions>
          <v-btn
            text
            @click="project_tree = []"
          >
            Réinitialiser
          </v-btn>

          <v-spacer />

          <v-btn
            class="white--text"
            color="primary"
            depressed
            :disabled="!project_tree.length"
            @click="addProjectToCommittee(selectedCommittee)"
          >
            Enregistrer
            <v-icon right>
              mdi-content-save
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Select agents dialog -->
    <v-dialog
      v-model="selectAgent"
      persistent
      width="900"
    >
      <v-card>
        <v-toolbar
          color="primary"
          dark
          flat
        >
          <v-icon>mdi-file-cabinet</v-icon>
          <v-toolbar-title>Inviter des agents au comité</v-toolbar-title>
          <v-spacer />
          <v-icon
            x-large
            @click="closeSelectAgentDialog"
          >
            mdi-close
          </v-icon>
        </v-toolbar>

        <v-row>
          <v-col>
            <v-card-text>
              <v-treeview
                v-model="agents_tree"
                :items="agentsInBoard"
                selected-color="primary"
                open-on-click
                selectable
                return-object
                expand-icon="mdi-chevron-down"
                on-icon="mdi-checkbox-marked-outline"
                off-icon="mdi-checkbox-blank-outline"
                indeterminate-icon="mdi-minus-box-outline"
              />
            </v-card-text>
          </v-col>

          <v-divider vertical />

          <v-col
            cols="12"
            md="6"
          >
            <v-card-text>
              <div
                v-if="agents_tree.length === 0"
                class="text-h6 font-weight-light grey--text pa-4 text-center"
              >
                Sélectionner le(s) agents(s) à inviter au comité
              </div>

              <v-scroll-x-transition
                group
                hide-on-leave
              >
                <v-chip
                  v-for="(selection, i) in selectedAgents"
                  :key="i"
                  color="primary"
                  dark
                  class="ma-1"
                >
                  <v-icon
                    left
                    small
                  >
                    mdi-file
                  </v-icon>
                  {{ selection.fullName }}
                </v-chip>
              </v-scroll-x-transition>
            </v-card-text>
          </v-col>
        </v-row>

        <v-divider />

        <v-card-actions>
          <v-btn
            text
            @click="agents_tree = []"
          >
            Réinitialiser
          </v-btn>

          <v-spacer />

          <v-btn
            class="white--text"
            color="primary"
            depressed
            :disabled="!agents_tree.length"
            @click="addAgentToCommittee(selectedCommittee)"
          >
            Enregistrer
            <v-icon right>
              mdi-content-save
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Alert activation or deactivation -->
    <v-dialog
      v-model="warm.state"
      max-width="300"
    >
      <v-card>
        <v-card-title>
          {{ warm.title }}

          <v-spacer />

          <v-icon
            aria-label="Close"
            @click="closeActivateCommittee"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text class="pb-1 pt-3 text-center">
          {{ warm.text }}
        </v-card-text>
        <v-divider />
        <v-card-text class="pb-5 pt-6 text-center">
          <v-btn
            class="mr-3"
            text
            @click="closeActivateCommittee"
          >
            Annuler
          </v-btn>

          <v-btn
            color="success"
            text
            @click="activateCommittee(warm.id, warm.activated)"
          >
            Oui
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  export default {
    name: 'Committee',
    filters: {
      formatDate (value) {
        const moment = require('moment')
        moment.locale('fr')
        return value ? moment(value).format('DD MMM YYYY') : ''
      },
    },
    data: vm => ({
      warm: {
        id: null,
        text: null,
        title: null,
        state: false,
        activated: null,
      },
      editedIndex: -1,
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      dateMenu: false,
      dialog: false,
      enableCommittee: false,
      selectProject: false,
      selectAgent: false,
      committee: {
        name: null,
        description: null,
        scheduled: new Date().toISOString().substr(0, 10),
        location: {
          region: null,
          department: null,
          town: null,
        },
        sectors: [],
      },
      isLoading: false,
      project_tree: [],
      agents_tree: [],
      types: [],
      selectedCommittee: null,
    }),
    computed: {
      loading () {
        return this.$store.state.utilities.loading
      },
      committeeFormAction () {
        return this.editedIndex === -1 ? 'Enregistrer' : 'Mettre à jour'
      },
      committeeFormTitle () {
        return this.editedIndex === -1 ? 'Création Comité' : 'Modification Comité'
      },
      validateCommittee () {
        return this.committee.name && this.committee.name.length >= 5 && this.committee.description && this.committee.description.length >= 30 &&
          this.committee.scheduled && this.committee.location && this.committee.location.region && this.committee.location.department &&
          this.committee.location.town && this.committee.sectors.length > 0
      },
      computedDateFormatted () {
        return this.formatDate(this.committee.scheduled)
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
      allDepartments () {
        return this.$store.state.utilities.departments
      },
      allTowns () {
        return this.$store.state.utilities.towns
      },
      sectors () {
        return this.$store.state.utilities.sectors
      },
      committees () {
        return this.$store.state.committees.committees
      },
      sectorsWithProject () {
        const projects = this.projects
        const totals = []
        let j = 0
        this.sectors.forEach(sector => {
          const children = []
          let sum = 0
          if (projects.length) {
            projects.forEach(project => {
              if (project.sectors.map(item => item).includes(sector.id)) {
                children.push({
                  id: project.id,
                  name: project.recipient.firstname + ' ' + project.recipient.lastname,
                  entitled: project.entitled,
                })
                sum++
              }
            })
          }
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
      projectItems () {
        return [
          {
            id: 20000,
            name: 'Liste des projets par secteurs',
            children: this.sectorsWithProject,
          },
        ]
      },

      // Select projects for committee section
      // Get selected project
      selectedProjects () {
        const projects = []
        for (const item of this.project_tree) {
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
      agents () {
        return this.$store.state.agents.agents
      },
      boardWithAgents () {
        const boards = []
        const agents = this.agents
        const totals = []
        agents.forEach(item => boards.push(item.board.tag))
        const uniqueBoards = new Set(boards)
        let j = 0
        uniqueBoards.forEach(board => {
          const children = []
          if (agents.length) {
            agents.forEach(agent => {
              if (agent.board.tag === board) {
                children.push(
                  {
                    id: agent.id,
                    name: agent.fullName,
                  },
                )
              }
            })
          }
          if (children.length) {
            totals.push(
              {
                id: j,
                name: board.toUpperCase() + ' (' + children.length + ')',
                children: children,
              },
            )
            j++
          }
        })
        return totals
      },
      agentsInBoard () {
        return [
          {
            id: 10000,
            name: 'Liste des agents par direction',
            children: this.boardWithAgents,
          },
        ]
      },
      selectedAgents () {
        const agents = []
        for (const item of this.agents_tree) {
          const agent = this.agents.find(value => value.id === item.id)

          if (!agent) continue

          agents.push(agent)
        }
        return agents
      },
    },

    watch: {
      'committee.scheduled' (val) {
        this.dateFormatted = this.formatDate(this.committee.scheduled)
      },
    },

    async beforeCreate () {
      await this.$store.dispatch('committees/fetchCommittees')
      await this.$store.dispatch('agents/fetchAgents')
      // await this.$store.dispatch('projects/fetchProjects', { page: 1, item: 50 })
      // await this.$store.dispatch('analysis/fetchAnalysisForRiskReview', { page: 1, item: 200 })
    },

    methods: {
      onCancel () {
        this.dialog = false
        if (this.editedIndex > -1) {
          this.editedIndex = -1
          this.committee = Object.assign({}, {
            name: null,
            description: null,
            scheduled: new Date().toISOString().substr(0, 10),
            location: {
              region: null,
              department: null,
              town: null,
            },
            sectors: [],
          })
        }
      },
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      editCommittee (committee) {
        this.editedIndex = this.committees.indexOf(committee)
        this.committee = Object.assign({}, {
          id: committee.id,
          name: committee.name,
          description: committee.description,
          scheduled: committee.scheduled.substr(0, 10),
          location: {
            region: committee.location.region,
            department: committee.location.department,
            town: committee.location.town,
          },
          sectors: committee.sectors.map(item => item),
        })
        this.dialog = true
      },
      async saveCommittee () {
        await this.$store.dispatch('committees/saveCommittee', { editedIndex: this.editedIndex, committee: this.committee })
        this.dialog = false
        if (this.editedIndex > -1) {
          this.editedIndex = -1
          this.committee = Object.assign({}, {
            name: null,
            description: null,
            scheduled: new Date().toISOString().substr(0, 10),
            location: {
              region: null,
              department: null,
              town: null,
            },
            sectors: [],
          })
        }
      },
      async deleteCommittee (id) {
        await this.$store.dispatch('committees/deleteCommittee', id)
      },
      openActivateCommittee (committeeId, title, mode) {
        this.warm.id = committeeId
        this.warm.text = (mode !== 'enabled') ? 'Activation du comité: ' + title : 'Désactivation du comité: ' + title
        this.warm.title = 'En êtes vous sure?'
        this.warm.state = true
        this.warm.activated = (mode !== 'enabled')
      },
      closeActivateCommittee () {
        this.warm = {
          id: null,
          text: null,
          title: null,
          state: false,
          activated: null,
        }
      },
      async activateCommittee (id, state) {
        const status = {
          activated: {
            state: state,
            start_at: new Date().toISOString(),
            end_at: null,
          },
        }
        await this.$store.dispatch('committees/updateCommittee', { id: id, status: status })
        this.closeActivateCommittee()
      },
      async loadProjectsToAssign (sectors, id) {
        const sector = sectors.map(sector => sector).join('-')
        await this.$store.dispatch('projects/fetchProjectForCommittee', { sector: sector })
        // await this.$store.dispatch('analysis/fetchAnalysisForRiskReview', { page: 1, item: 200 })
        this.selectedCommittee = id
        this.selectProject = true
      },
      // Open select agent dialog
      openSelectAgentDialog (committeeId) {
        this.selectedCommittee = committeeId
        this.agents_tree = this.committees.find(committee => committee.id === committeeId).participants.agents.map((agent) => Object.assign({}, { id: agent.id, name: agent.name }))
        this.selectAgent = true
      },
      // Close select agent dialog
      closeSelectAgentDialog () {
        this.agents_tree = []
        this.selectAgent = false
        this.selectedCommittee = null
      },
      // Close select project dialog
      closeSelectProjectDialog () {
        this.project_tree = []
        this.selectProject = false
        this.selectedCommittee = null
      },
      // Add participants to committee
      async addAgentToCommittee (committeeId) {
        await this.$store.dispatch('committees/addParticipants', { id: committeeId, participants: { agents: this.agents_tree, externals: null } })
        this.closeSelectAgentDialog()
      },
      // Add projects to committee
      async addProjectToCommittee (committeeId) {
        window.console.log({ committeeId: committeeId })
        const projects = []
        this.project_tree.forEach(item => projects.push({ project: item.id }))
        window.console.log({ projects: projects })
        await this.$store.dispatch('committees/updateCommittee', { id: committeeId, projects: projects })
        this.closeSelectProjectDialog()
      },
      enterCommittee (id) {
        this.$router.push('/committee-mode/' + id)
      },
    },
  }
</script>
