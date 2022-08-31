<!-- <template>
  <div class="bg-dark p-2 rounded"></div>
  <img class="img-fluid" :src="ticket.profile?.picture" alt="">
  <h4 class="text-center">{{  ticket.event.title  }}</h4>
  <button class="btn btn-danger" @click="removeTicket">Cancel Ticket</button>
</template>
<script>
import { ticketService } from '../services/TicketService';
import { logger } from '../utils/Logger';
import Pop from '../utils/Pop';
export default {
  props: { ticket: { type: Object, required: true } },
  setup() {
    return {
      async removeTicket(ticketId) {
        try {
          await ticketService.removeTicket(ticketId)
        } catch (error) {
          logger.log('[removing ticket]', error)
          Pop.error(error)
        }
      }
    }
  }
}
</script> -->