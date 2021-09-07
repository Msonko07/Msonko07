<template>
  <v-container
    class="pa-0"
  >
    <v-card
      outlined
    >
      <v-card-title class="text-center">
        Commentaires
      </v-card-title>
      <v-responsive
        class="overflow-y-auto"
        max-height="600"
      >
        <v-card-text>
          <v-timeline
            dense
            clipped
          >
            <v-timeline-item
              fill-dot
              class="white--text mb-5"
              color="primary"
            >
              <template v-slot:icon>
                <span>{{ agent.initials }}</span>
              </template>
              <v-text-field
                v-model="input"
                hide-details
                flat
                label="Laisser un commentaire..."
                solo
                @keydown.enter="addComment"
              >
                <template v-slot:append>
                  <v-btn
                    class="mx-0"
                    depressed
                    icon
                    color="secondary"
                    @click="addComment"
                  >
                    <v-icon>mdi-content-save</v-icon>
                  </v-btn>
                </template>
              </v-text-field>
            </v-timeline-item>

            <v-slide-x-transition
              v-if="comment"
              group
            >
              <v-timeline-item
                v-for="event in comment.comments.slice().reverse()"
                :key="event.commented_at"
                fill-dot
                class="white--text mb-2"
                color="primary"
              >
                <template v-slot:icon>
                  <span class="text-caption">
                    {{ agents.find(item => item.id === event.author).initials }}
                  </span>
                </template>
                <v-row justify="space-between">
                  <v-col
                    class="text-caption text--primary"
                    cols="8"
                    v-text="event.text"
                  />
                  <v-col
                    class="text-center text-caption text--primary"
                    cols="4"
                  >
                    {{ event.commented_at | formatDate }}
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-slide-x-transition>
          </v-timeline>
        </v-card-text>
      </v-responsive>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'AnalysisComments',
    filters: {
      formatDate (value) {
        const moment = require('moment')
        moment.locale('fr')
        return value ? moment(value).format('lll') : ''
      },
    },
    props: {
      analysis: {
        type: String,
        required: true,
      },
      agents: {
        type: Array,
        required: true,
      },
      agent: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      input: null,
    }),

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
      comment () {
        return this.$store.state.analysis.comment
      },
    },

    watch: {
      analysis: {
        immediate: true,
        handler (val) {
          this.$store.dispatch('analysis/fetchAnalysisComment', val)
        },
      },
    },

    methods: {
      async addComment () {
        await this.$store.dispatch(
          'analysis/addAnalysisComment',
          {
            analysis: this.analysis,
            author: this.agent.id,
            text: this.input,
          },
        )
        this.input = null
      },
    },
  }
</script>
