<script setup lang="ts">
import { IonList, IonItem, IonLabel, IonInput, IonButton, IonToast } from '@ionic/vue'
import { reactive } from 'vue'
import { addContato } from '@/services/database'

const form = reactive({ nome: '', email: '', telefone: '' })
const toast = reactive({ show: false, message: '' })
const errors = reactive({ nome: '', email: '' })

function clearErrors() {
    errors.nome = ''
    errors.email = ''
}

async function salvarContato() {
clearErrors()

if (!form.nome || !form.email) {
    if (!form.nome) {
        errors.nome = 'O nome é obrigatório.' 
    }
    if (!form.email) {
        errors.email = 'O email é obrigatório.'
    }
    toast.show = true 
    toast.message = 'Por favor, preencha os campos obrigatórios.'
    return
}

await addContato(form.nome, form.email, form.telefone) 

form.nome = ''
form.email = ''
form.telefone = ''
toast.message = 'Contato salvo com sucesso!'
toast.show = true
toast.message = 'Contato salvo com sucesso!'
window.dispatchEvent(new CustomEvent('contato-adicionado'))

}

</script>