import React,{useState, FormEvent} from 'react';
import { useHistory } from "react-router-dom";
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';
import { api } from '../../services/api';

const TeacherForm: React.FC = () => {
  const history = useHistory()
  const [scheduleItems, SetScheduleItems] = useState([
    {week_day:0,from:'',to:''}
  ])
  const [name,setName] = useState('')
  const [avatar,setAvatar] = useState('')
  const [whatsapp,setWhatsapp] = useState('')
  const [bio,setBio] = useState('')
  const [subject,setSubject] = useState('')
  const [cost,setCost] = useState('')

  
  function addNewScheduleItem(){
    SetScheduleItems([...scheduleItems,{week_day:1,from:'',to:''}])
  }

  function setScheduleItemValue(field:string,position:number, value:string){
    const updateScheduleItems = scheduleItems.map((scheduleItem,index)=>{
      if(index===position){
        return {...scheduleItem,[field]:value}
      }
      return scheduleItem
    })
    SetScheduleItems(updateScheduleItems)
  }

  async function createClass(e: FormEvent){
    e.preventDefault()
    await api.post('classes',{
      name,
      avatar,
      bio,
      whatsapp,
      subject,
      cost:Number(cost),
      schedule:scheduleItems
    }).then(()=>{
      alert('Cadastrado com sucesso')
    }).catch(()=>{
      alert('Erro ao se cadastrar')
    })

    history.push('/')
  }

  return (
    <div id='page-teacher-form' className="container">
      <PageHeader 
        title='Que incrível que voce quer dar aulas'
        description='O Primeiro passo é preencher este formulário de inscrição'
      />
      <main>
        <form onSubmit={createClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              name='name' 
              label="Nome Completo"
              value={name}
              onChange={e=>setName(e.target.value)}
            />
            <Input 
              name='avatar' 
              label="Avatar"
              value={avatar}
              onChange={e=>setAvatar(e.target.value)}
            />
            <Input 
              name='whatsapp' 
              label="WhatsApp"
              value={whatsapp}
              onChange={e=>setWhatsapp(e.target.value)}
            />
            <Textarea 
              name='bio' 
              label="Biografia"
              value={bio}
              onChange={e=>setBio(e.target.value)}
            />
          </fieldset>
        
          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name='subject' 
              label='Matéria'
              onChange={e=>setSubject(e.target.value)}
              options={[
                {value:'Matemática',label:'Matemática'},
                {value:'Física',label:'Física'},
                {value:'Artes',label:'Artes'},
                {value:'Química',label:'Química'},
                {value:'Inglês',label:'Inglês'}
              ]}
            />
            <Input 
              name='cost' 
              label='Curto da sua hora por aula'
              value={cost}
              onChange={e=>setCost(e.target.value)}
            />
          </fieldset>
          
          <fieldset>
            <legend>
              Horários disponíveis
              <button type='button' onClick={addNewScheduleItem}>
                +Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem,index)=>{
              return (
                <div 
                  key={scheduleItem.week_day}
                  className="schedule-item"
                >
                  <Select
                    name='week_day' 
                    label='Dia da semana'
                    onChange={e=>setScheduleItemValue('week_day',index,e.target.value)}
                    options={[
                      {value:'0',label:'Domingo'},
                      {value:'1',label:'Segunda-feira'},
                      {value:'2',label:'Terça-feira'},
                      {value:'3',label:'Quarta-feira'},
                      {value:'4',label:'Quinta-feira'},
                      {value:'5',label:'Sexta-feira'},
                      {value:'6',label:'Sábado'},
                    ]}
                  />

                  <Input 
                    name='from' 
                    label='Das' 
                    type='time'
                    value={scheduleItem.from}
                    onChange={e=>setScheduleItemValue('from',index,e.target.value)}
                  />
                  <Input 
                    name='to' 
                    label='Até' 
                    type='time'
                    value={scheduleItem.to}
                    onChange={e=>setScheduleItemValue('to',index,e.target.value)}
                  />
                </div>
              )
            })}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante!<br/>
              Preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>

          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm;