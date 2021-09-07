<template>
  <v-container
    id="projectHome"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col cols="8">
        <base-material-alert
          v-if="errorMessage"
          color="error"
          dark
          dismissible
        >
          <span
            class="text-uppercase"
            v-text="errorMessage"
          /> — {{ errorMessage }}
        </base-material-alert>
      </v-col>
    </v-row>
    <v-row
      class="mt-n5"
    >
      <v-col>
        <search-project
          :sector="$route.params.sector"
          @searchData="researchData"
          @resetSearchData="resetResearchData"
        />
      </v-col>
    </v-row>
    <!--<v-row>
      <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          color="primary"
          hover-reveal
          type="Bar"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Website Views
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 10 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          color="success"
          hover-reveal
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">
            Daily Sales
          </h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            <v-icon
              color="green"
              small
            >
              mdi-arrow-up
            </v-icon>
            <span class="green--text">55%</span>&nbsp;
            increase in today's sales
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">updated 4 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <base-material-chart-card
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          hover-reveal
          color="info"
          type="Line"
        >
          <template v-slot:reveal-actions>
            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  color="info"
                  icon
                  v-on="on"
                >
                  <v-icon
                    color="info"
                  >
                    mdi-refresh
                  </v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  v-bind="attrs"
                  light
                  icon
                  v-on="on"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">
            Completed Tasks
          </h3>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            Last Last Campaign Performance
          </p>

          <template v-slot:actions>
            <v-icon
              class="mr-1"
              small
            >
              mdi-clock-outline
            </v-icon>
            <span class="caption grey--text font-weight-light">campaign sent 26 minutes ago</span>
          </template>
        </base-material-chart-card>
      </v-col>
    </v-row>-->
    <v-row
      class="mt-n5"
    >
      <v-col
        md="2"
        class="ml-auto"
      >
        <v-btn
          color="primary"
          default
          @click="dialog = true"
        >
          <v-icon
            left
          >
            mdi-plus-box
          </v-icon>
          Nouveau projet
        </v-btn>
      </v-col>
    </v-row>
    <base-material-card
      color="secondary"
      icon="mdi-table"
      inline
      :title="`Liste des projets du secteur : ${sectorName} / Total : ${totalItems}`"
      class="px-5 py-3 mb-5"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom(s)</th>
            <th>Intitulé</th>
            <th>Sous-secteurs</th>
            <th class="text-right">
              Montant sollicité
            </th>
            <th>
              Responsable
            </th>
            <th>
              Expert Sectoriel
            </th>
            <th>
              Analyste
            </th>
            <th class="text-center">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item,k) in projects"
            :key="k"
          >
            <td>{{ (item.recipient && item.recipient.lastname) ? item.recipient.lastname : '' }}</td>
            <td>{{ (item.recipient && item.recipient.firstname) ? item.recipient.firstname : '' }}</td>
            <td>{{ item.entitled.substr(0, 100) }}</td>
            <td>
              {{ item.subsectors.map(sub => subsectors.find(subSec => subSec.id === sub).name).join(' / ') }}
            </td>
            <td class="text-right">
              {{ item.financial_infos.amount_requested | formatNumber }} XOF
            </td>
            <td>
              <v-menu
                v-if="agents && item.analysis && item.analysis.program_owner && item.analysis.program_owner.agent"
                bottom
                min-width="250px"
                rounded
                offset-y
                class="pa-0"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    x-large
                    v-on="on"
                  >
                    <v-avatar
                      v-if="item.analysis.program_owner.state === 'waiting'"
                      color="info"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.program_owner.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.program_owner.state === 'approved'"
                      color="success"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.program_owner.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.program_owner.state === 'rejected'"
                      color="error"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.program_owner.agent).initials }}
                      </span>
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card class="ma-0">
                  <v-list-item-content class="justify-center">
                    <div class="text-center">
                      <v-avatar
                        color="secondary"
                      >
                        <span class="white--text text-subtitle-1">{{ agents.find(a => a.id === item.analysis.program_owner.agent).initials }}</span>
                      </v-avatar>
                      <h3>{{ agents.find(a => a.id === item.analysis.program_owner.agent).fullName }}</h3>
                      <p class="text-caption mt-1">
                        {{ agents.find(a => a.id === item.analysis.program_owner.agent).board.name }}
                      </p>
                      <v-divider class="my-3" />
                      <p class="text-body-2 mt-1">
                        Assigné: {{ item.analysis.assigned_at | formatDate }}
                      </p>
                      <v-divider
                        v-if="item.analysis.program_owner.end_at"
                        class="my-3"
                      />
                      <p
                        v-if="item.analysis.program_owner.end_at"
                        class="text-body-2 mt-1"
                      >
                        Validation: {{ item.analysis.sector_owner.end_at | formatDate }}
                      </p>
                      <v-divider class="my-3" />
                      <v-btn
                        depressed
                        rounded
                        text
                        color="success"
                        :disabled="item.analysis.program_owner.agent !== agent.id || (item.analysis.sector_owner && item.analysis.sector_owner.state === 'waiting')"
                        @click="openValidateAnalysisDialog('approved', 'program', item.analysis._id, item.entitled)"
                      >
                        Valider l'analyse
                        <v-icon
                          dark
                          right
                        >
                          mdi-checkbox-marked-circle
                        </v-icon>
                      </v-btn>
                      <v-divider class="my-3" />
                      <v-btn
                        depressed
                        rounded
                        text
                        color="error"
                        :disabled="item.analysis.program_owner.agent !== agent.id || (item.analysis.sector_owner && item.analysis.sector_owner.state === 'waiting')"
                        @click="openValidateAnalysisDialog('rejected', 'program', item.analysis._id, item.entitled)"
                      >
                        Rejetter l'analyse
                        <v-icon
                          dark
                          right
                        >
                          mdi-cancel
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-list-item-content>
                </v-card>
              </v-menu>
            </td>
            <td>
              <v-menu
                v-if="agents && item.analysis && item.analysis.sector_owner && item.analysis.sector_owner.agent"
                bottom
                min-width="250px"
                rounded
                offset-y
                class="pa-0"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    x-large
                    v-on="on"
                  >
                    <v-avatar
                      v-if="item.analysis.sector_owner.state === 'waiting'"
                      color="info"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.sector_owner.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.sector_owner.state === 'approved'"
                      color="success"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.sector_owner.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.sector_owner.state === 'rejected'"
                      color="error"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.sector_owner.agent).initials }}
                      </span>
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card class="ma-0">
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                        color="secondary"
                      >
                        <span class="white--text text-subtitle-1">{{ agents.find(a => a.id === item.analysis.sector_owner.agent).initials }}</span>
                      </v-avatar>
                      <h3>{{ agents.find(a => a.id === item.analysis.sector_owner.agent).fullName }}</h3>
                      <p class="text-caption mt-1">
                        {{ agents.find(a => a.id === item.analysis.sector_owner.agent).board.name }}
                      </p>
                      <v-divider class="my-3" />
                      <p class="text-body-2 mt-1">
                        Assigné: {{ item.analysis.assigned_at | formatDate }}
                      </p>
                      <v-divider
                        v-if="item.analysis.sector_owner.end_at"
                        class="my-3"
                      />
                      <p
                        v-if="item.analysis.sector_owner.end_at"
                        class="text-body-2 mt-1"
                      >
                        Validation: {{ item.analysis.sector_owner.end_at | formatDate }}
                      </p>
                      <v-divider class="my-3" />
                      <v-btn
                        depressed
                        rounded
                        text
                        color="success"
                        :disabled="item.analysis.sector_owner.agent !== agent.id || (item.analysis.analysis && item.analysis.analysis.state === 'waiting')"
                        @click="openValidateAnalysisDialog('approved', 'sector', item.analysis._id, item.entitled)"
                      >
                        Valider l'analyse
                        <v-icon
                          dark
                          right
                        >
                          mdi-checkbox-marked-circle
                        </v-icon>
                      </v-btn>
                      <v-divider class="my-3" />
                      <v-btn
                        depressed
                        rounded
                        text
                        color="error"
                        :disabled="item.analysis.sector_owner.agent !== agent.id || (item.analysis.analysis && item.analysis.analysis.state === 'waiting')"
                        @click="openValidateAnalysisDialog('rejected', 'sector', item.analysis._id, item.entitled)"
                      >
                        Rejetter l'analyse
                        <v-icon
                          dark
                          right
                        >
                          mdi-cancel
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-list-item-content>
                </v-card>
              </v-menu>
            </td>
            <td>
              <v-menu
                v-if="agents && item.analysis && item.analysis.analysis && item.analysis.analysis.agent"
                bottom
                min-width="250px"
                rounded
                offset-y
                class="py-0"
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    x-large
                    v-on="on"
                  >
                    <v-avatar
                      v-if="item.analysis.analysis.state === 'waiting'"
                      color="info"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.analysis.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.analysis.state === 'approved'"
                      color="success"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.analysis.agent).initials }}
                      </span>
                    </v-avatar>
                    <v-avatar
                      v-if="item.analysis.analysis.state === 'rejected'"
                      color="error"
                      size="36"
                    >
                      <span class="white--text text-subtitle-1">
                        {{ agents.find(a => a.id === item.analysis.analysis.agent).initials }}
                      </span>
                    </v-avatar>
                  </v-btn>
                </template>
                <v-card class="ma-0">
                  <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                      <v-avatar
                        color="secondary"
                      >
                        <span class="white--text text-subtitle-1">{{ agents.find(a => a.id === item.analysis.analysis.agent).initials }}</span>
                      </v-avatar>
                      <h3>{{ agents.find(a => a.id === item.analysis.analysis.agent).fullName }}</h3>
                      <p class="text-body-2 mt-1">
                        {{ agents.find(a => a.id === item.analysis.analysis.agent).board.name }}
                      </p>
                      <v-divider class="my-3" />
                      <p class="text-body-2 mt-1">
                        Assigné: {{ item.analysis.analysis.assigned_at | formatDate }}
                      </p>
                      <v-divider
                        v-if="item.analysis.analysis.end_at"
                        class="my-3"
                      />
                      <p
                        v-if="item.analysis.analysis.end_at"
                        class="text-body-2 mt-1"
                      >
                        Analysé: {{ item.analysis.analysis.end_at | formatDate }}
                      </p>
                    </div>
                  </v-list-item-content>
                </v-card>
              </v-menu>
            </td>
            <td class="text-center">
              <v-menu
                bottom
                left
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list
                  nav
                  dense
                >
                  <v-list-item-group
                    color="infos"
                  >
                    <v-list-item
                      @click="showProjectInfos(item)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-file-table-outline
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Fiche projet</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      @click="showProjectFinancialInfos(item.financial_infos)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-finance
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Informations financière</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      @click="showProjectMarketInfos(item.market_infos)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-shopping-outline
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Informations de marché</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item
                      :disabled="item.financial_infos.amount_requested < 500000 || item.analysis.sector_owner.agent !== agent.id || agent.board.tag !== 'dex'"
                      @click="selectAgent(item.id, item.analysis._id, item.sectors[0]._id)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-file-account
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Affecter le projet</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!-- comment text -->
                    <v-list-item
                      @click="openAnalysisCommentDialog(item.analysis._id)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-comment-text-multiple
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Commentaires</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!-- Technical validation -->
                    <v-list-item
                      :disabled="agent.role !== 'directionOwner' ||
                        agent.board.tag !== 'dex' ||
                        !item.analysis.program_owner.agent ||
                        item.analysis.program_owner.state === 'waiting' ||
                        !item.analysis.sector_owner.agent ||
                        item.analysis.sector_owner.state === 'waiting' ||
                        !item.analysis.analysis.agent ||
                        item.analysis.analysis.state === 'waiting'
                      "
                      @click="openValidateAnalysisDialog('', 'technical', item.analysis._id, item.entitled)"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-gavel
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Validation Technique</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!-- summary file -->
                    <v-list-item
                      disabled
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-text-box-outline
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Fiche de synthèse</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <!-- analyse project -->
                    <v-list-item
                      :disabled="item.financial_infos.amount_requested < 500000 || item.analysis.analysis.agent !== agent.id"
                      :to="`/project-analysis/${item.id}`"
                    >
                      <v-list-item-icon>
                        <v-icon
                          small
                        >
                          mdi-file-compare
                        </v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Analyser le projet</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <v-divider />
      <div class="text-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="1">
              <v-container class="max-width">
                <v-select
                  v-model="perPage"
                  :items="itemsPerPage"
                  label="Projects par page"
                  @change="setPage"
                />
              </v-container>
            </v-col>
            <v-col cols="6">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  class="my-4"
                  :length="totalPages"
                  @input="setPage(searched)"
                />
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </base-material-card>
    <div class="py-3" />
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
          dense
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Ajout d'un nouveau bénéficiaire</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog = false"
            >
              <v-icon
                left
              >
                mdi-content-save
              </v-icon>
              Enregistrer
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-col
            class="mx-auto"
            cols="12"
            md="11"
          >
            <div class="text-center text-h5 font-weight-light mb-12 pl-0 primary--text">
              Formulaire Enrollement
            </div>

            <base-material-tabs
              v-model="tab"
              background-color="transparent"
              centered
              color="success"
              icons-and-text
            >
              <v-tab
                v-for="(item, i) in tabs"
                :key="i"
              >
                {{ item.text }}
                <v-icon v-text="item.icon" />
              </v-tab>

              <v-tabs-items
                v-model="tab"
                class="pt-12 transparent"
              >
                <!-- recipient item -->
                <v-tab-item>
                  <v-card class="mt-0 px-5">
                    <v-card-text>
                      <base-subheading subheading="Informations du bénéficiaire">
                        <p class="grey--text text-body-2 font-weight-light">
                          More Information here
                        </p>
                      </base-subheading>
                      <!-- Start recipient infos form -->
                      <recipient-form @update="processRecipientData" />
                      <!-- End recipient infos form -->
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <!-- project item -->
                <v-tab-item>
                  <v-card class="mt-0 px-5">
                    <v-card-text>
                      <base-subheading subheading="Informations du projet">
                        <p class="grey--text text-body-2 font-weight-light">
                          More Information here
                        </p>
                      </base-subheading>

                      <!-- Start project infos form -->
                      <project-form @update="processProjectData" />
                      <!-- End of project infos form -->
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <!-- market item -->
                <v-tab-item>
                  <v-card class="mt-0 px-5">
                    <v-card-text>
                      <base-subheading subheading="Informations sur le marché">
                        <p class="grey--text text-body-2 font-weight-light">
                          More Information here
                        </p>
                      </base-subheading>

                      <!-- Start market infos form -->
                      <market-infos-form @update="processMarketInfosData" />
                      <!-- End of market infos form -->
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <!-- financial item -->
                <v-tab-item>
                  <v-card class="mt-0 px-5">
                    <v-card-text>
                      <base-subheading subheading="Informations financières">
                        <p class="grey--text text-body-2 font-weight-light">
                          More Information here
                        </p>
                      </base-subheading>

                      <!-- Start financial info form -->
                      <financial-infos-form @update="processFinancialInfosData" />
                      <!-- End financial infos form -->
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </base-material-tabs>
          </v-col>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="recipientDialog"
      max-width="900px"
    >
      <recipient-infos :recipient="recipientInfos" />
    </v-dialog>
    <v-dialog
      v-model="projectDialog"
      max-width="900px"
    >
      <project-infos :project="projectInfos" />
    </v-dialog>
    <v-dialog
      v-model="financialDialog"
      max-width="900px"
    >
      <project-financial-infos :financial="projectFinancialInfos" />
    </v-dialog>
    <v-dialog
      v-model="marketDialog"
      max-width="900px"
    >
      <project-market-infos :market="projectMarketInfos" />
    </v-dialog>
    <!-- analysis comment Dialog -->
    <v-dialog
      v-model="analysisCommentDialog"
      scrollable
      max-width="500px"
    >
      <analysis-comments
        :analysis="selectedAnalysisId"
        :agent="agent"
        :agents="agents"
      />
    </v-dialog>
    <!-- dispatch project dialog -->
    <v-dialog
      v-model="affectProjectDialog"
      persistent
      max-width="350"
    >
      <v-card>
        <v-card-title class="text-h5">
          Sélection un agent
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="toAnalyse.agent"
            class="ma-0 pa-0"
            :items="agents.filter(item => item.sectors.includes(toAnalyse.sector))"
            item-text="fullName"
            item-value="id"
            dense
            label="Analyste"
            single-line
            outlined
          />
        </v-card-text>
        <v-card-text>
          <v-textarea
            v-model="toAnalyse.text"
            label="Instruction d'affectation ou d'analyse"
            outlined
            dense
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="red darken-1"
            text
            @click="closeSelectAgentDialog"
          >
            Annuler
          </v-btn>
          <v-btn
            color="primary"
            text
            :disabled="!toAnalyse.agent || !toAnalyse.project"
            @click="affectProject"
          >
            Affecter le projet
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- validate analysis dialog -->
    <v-dialog
      v-model="validateAnalysisDialog"
      persistent
      max-width="350"
    >
      <v-card>
        <v-card-title
          v-if="advice.state === 'approved'"
          class="text-subtitle-1"
        >
          Avis favorable projet
          <v-divider />
          <p class="text-caption">
            {{ advice.title }}
          </p>
        </v-card-title>
        <v-card-title
          v-if="advice.state === 'rejected'"
          class="text-subtitle-1"
        >
          Avis défavorable projet
          <v-divider />
          <p class="text-caption">
            {{ advice.title }}
          </p>
        </v-card-title>
        <v-card-title
          v-if="advice.state === ''"
          class="text-subtitle-1"
        >
          Avis technique projet
          <v-divider />
          <p class="text-caption">
            {{ advice.title }}
          </p>
        </v-card-title>
        <v-card-text>
          <v-select
            v-model="advice.state"
            class="ma-0 pa-0"
            :items="[{ id: 'approved', text: 'Avis favorable' }, { id: 'rejected', text: 'avis défavorable' }]"
            item-text="text"
            item-value="id"
            dense
            single-line
            outlined
          />
        </v-card-text>
        <v-card-text>
          <v-textarea
            v-model="advice.text"
            label="commentaire de validation"
            outlined
            dense
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="red darken-1"
            text
            @click="closeValidateAnalysisDialog"
          >
            Annuler
          </v-btn>
          <v-btn
            color="primary"
            text
            :disabled="!advice.text || !advice.type || !advice.analysis || !advice.state"
            @click="validateAnalysis"
          >
            Enregistrer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
  </v-container>
</template>

<script>
  import RecipientForm from '@/views/dashboard/components/forms/Recipient'
  import ProjectForm from '@/views/dashboard/components/forms/Project'
  import MarketInfosForm from '@/views/dashboard/components/forms/MarketInfos'
  import FinancialInfosForm from '@/views/dashboard/components/forms/FinancialInfos'
  import RecipientInfos from '@/views/dashboard/component/recipient/recipient'
  import ProjectInfos from '@/views/dashboard/component/recipient/project'
  import ProjectFinancialInfos from '@/views/dashboard/component/recipient/financial'
  import ProjectMarketInfos from '@/views/dashboard/component/recipient/market'
  import AnalysisComments from '@/views/dashboard/component/AnalysisComments'
  import SearchProject from '@/views/dashboard/component/search/SearchProject'
  export default {
    name: 'ProjectHome',
    components: {
      RecipientForm,
      ProjectForm,
      MarketInfosForm,
      FinancialInfosForm,
      RecipientInfos,
      ProjectInfos,
      ProjectFinancialInfos,
      ProjectMarketInfos,
      AnalysisComments,
      SearchProject,
    },
    filters: {
      formatNumber (value) {
        if (value !== null) {
          return parseInt(value, 10).toLocaleString('fr-FR')
        } else {
          return '0'
        }
      },
      formatDate (value) {
        const moment = require('moment')
        moment.locale('fr')
        return value ? moment(value).format('lll') : ''
      },
    },
    data () {
      return {
        page: 1,
        perPage: 10,
        itemsPerPage: [10, 20, 50, 100, 200, 300, 400, 500],
        dialog: false,
        recipientDialog: false,
        projectDialog: false,
        financialDialog: false,
        marketDialog: false,
        affectProjectDialog: false,
        validateAnalysisDialog: false,
        analysisCommentDialog: false,
        selectedAnalysisId: null,
        toAnalyse: {
          project: null,
          agent: null,
          text: null,
          sector: null,
        },
        advice: {
          text: null,
          state: null,
          type: null,
          analysis: null,
          title: null,
        },
        tab: 0,
        tabs: [
          {
            text: 'Bénéficiaire',
            icon: 'mdi-account-details',
          },
          {
            text: 'Projet',
            icon: 'mdi-handshake',
          },
          {
            text: 'Marché',
            icon: 'mdi-store',
          },
          {
            text: 'Finance',
            icon: 'mdi-finance',
          },
        ],
        recipient: {},
        project: {},
        marketInfo: {},
        financialInfo: {},
        recipientInfos: {},
        projectInfos: {},
        projectFinancialInfos: {},
        projectMarketInfos: {},
        dailySalesChart: {
          data: {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
              [12, 17, 7, 17, 23, 18, 38],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        dataCompletedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              [230, 750, 450, 300, 280, 240, 200, 190],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
        emailsSubscriptionChart: {
          data: {
            labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],

            ],
          },
          options: {
            axisX: {
              showGrid: false,
            },
            low: 0,
            high: 1000,
            chartPadding: {
              top: 0,
              right: 5,
              bottom: 0,
              left: 0,
            },
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function (value) {
                  return value[0]
                },
              },
            }],
          ],
        },
        actions: [
          {
            color: 'info',
            icon: 'mdi-account',
            to: 'projects',
          },
          {
            color: 'success',
            icon: 'mdi-pencil',
            to: 'projects',
          },
          {
            color: 'error',
            icon: 'mdi-head-dots-horizontal',
            to: 'project-analysis',
          },
        ],
        searched: {},
      }
    },
    computed: {
      loading () {
        return this.$store.state.utilities.loading
      },
      errorMessage () {
        return this.$store.getters['utilities/getError']
      },
      projects () {
        return this.$store.state.projects.projects
      },
      totalItems () {
        return this.$store.state.projects.totalItems
      },
      totalPages () {
        if (this.perPage > this.totalItems) {
          return 1
        } else {
          return (this.totalItems % this.perPage === 0) ? this.totalItems / this.perPage : parseInt((this.totalItems / this.perPage)) + 1
        }
      },
      agent () {
        return this.$store.state.agents.agent
      },
      agents () {
        return this.$store.state.agents.agents
      },
      sectorName () {
        const { name } = this.$route.params
        return name.split('-')
          .map(item => item.charAt(0).toUpperCase() + item.slice(1))
          .join(' ')
      },
      subsectors () {
        return this.$store.state.utilities.subsectors
      },
    },
    async beforeCreate () {
      const { sector } = this.$route.params
      // await this.$store.dispatch('projects/fetchProjects')
      await this.$store.dispatch('projects/fetchProjectBySectors', { sector: sector, page: this.page, item: this.perPage })
      await this.$store.dispatch('agents/fetchAgents')
    },
    methods: {
      researchData (data) {
        this.searched = data
        this.$store.dispatch('projects/searchProjects', { page: this.page, item: this.perPage, search: JSON.stringify(data) })
      },
      resetResearchData () {
        this.searched = {}
        this.setPage({})
      },
      processRecipientData (data) {
        Object.assign(this.recipient, data)
      },
      processProjectData (data) {
        Object.assign(this.project, data)
      },
      processMarketInfosData (data) {
        Object.assign(this.marketInfo, data)
      },
      processFinancialInfosData (data) {
        Object.assign(this.financialInfo, data)
      },
      showRecipientInfos (data) {
        this.recipientInfos = data
        this.recipientDialog = true
      },
      showProjectInfos (data) {
        this.projectInfos = data
        this.projectDialog = true
      },
      showProjectFinancialInfos (data) {
        this.projectFinancialInfos = data
        this.financialDialog = true
      },
      showProjectMarketInfos (data) {
        this.projectMarketInfos = data
        this.marketDialog = true
      },
      selectAgent (projectId, analysisId, sectorId) {
        this.toAnalyse.project = projectId
        this.toAnalyse.analysis = analysisId
        this.toAnalyse.sector = sectorId
        this.affectProjectDialog = true
      },
      closeSelectAgentDialog () {
        this.affectProjectDialog = false
        this.toAnalyse = { project: null, agent: null }
      },
      openValidateAnalysisDialog (state, type, analysisId, title) {
        this.validateAnalysisDialog = true
        this.advice.state = state
        this.advice.type = type
        this.advice.analysis = analysisId
        this.advice.title = title
      },
      openAnalysisCommentDialog (analysisId) {
        this.selectedAnalysisId = analysisId
        this.analysisCommentDialog = true
      },
      closeValidateAnalysisDialog () {
        this.validateAnalysisDialog = false
        this.advice = { text: null, analysis: null, type: null, state: null }
      },
      async affectProject () {
        await this.$store.dispatch(
          'analysis/affectProject',
          {
            project: this.toAnalyse.project,
            program_owner: this.agent.id,
            sector_owner: this.toAnalyse.agent,
            text: this.toAnalyse.text,
            author: this.agent.id,
          },
        )
        this.closeSelectAgentDialog()
      },
      async validateAnalysis () {
        await this.$store.dispatch(
          'analysis/approveAnalysisResult',
          { ...this.advice, author: this.agent.id },
        )

        this.closeValidateAnalysisDialog()
      },
      async setPage (data) {
        const { sector } = this.$route.params
        if (Object.keys(data).length) {
          await this.$store.dispatch('projects/searchProjects', { page: this.page, item: this.perPage, search: JSON.stringify(data) })
        } else {
          await this.$store.dispatch('projects/fetchProjectBySectors', { sector: sector, page: this.page, item: this.perPage })
        }
      },
    },
  }
</script>

<style scoped>

</style>
