<template>
  <section class="container-fluid">
    <div class="row bg-dark py-1 px-5 text-light">
      <div class="col-12">
        <h2></h2>
      </div>

      <div class="col-12">

      </div>
      <section class=" d-flex justify-content-evenly row ">
        <div class="col-2 btn btn-outline-dark-pill bg-primary" @click="filterTerm = ''">All</div>
        <div class="col-2 btn btn-outline-dark -pill bg-primary" @click="filterTerm = 'concert'">Concerts</div>
        <div class="col-2 btn btn-outline-dark -pill bg-primary" @click="filterTerm = 'convention'">Conventions
        </div>
        <div class="col-2 btn btn-outline-dark-pill bg-primary" @click="filterTerm = 'sport'">Sports</div>
        <div class="col-2 btn btn-outline-dark -pill bg-primary" @click="filterTerm = 'digital'">Digital</div>
      </section>
      <EventForm />
    </div>
    <div class="row">
      <EventCard class="text-dark col-2 my-2" v-for="e in events" :key="e.id" :event="e" />
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
import { eventsService } from "../services/EventService";
import { logger } from "../utils/Logger";
import EventCard from "../components/EventCard.vue";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import EventForm from "../components/EventForm.vue";
export default {
  setup() {
    const filterTerm = ref("");
    async function getEvents() {
      try {
        await eventsService.getEvents();
      }
      catch (error) {
        logger.log(error);
      }
    }

    onMounted(() => {
      getEvents();
    });
    return {
      filterTerm,
      // albums: computed(() => AppState.albums.filter(a => filterTerm.value ? a.category == filterTerm.value : true)),
      events: computed(() => AppState.events.filter(e => filterTerm.value ? e.type == filterTerm.value : true)),
      // events: computed(()=> AppState.events)
    };
  },
  components: { EventForm }
}
</script>