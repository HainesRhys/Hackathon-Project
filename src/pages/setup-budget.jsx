import { Button, Slider, Stack, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import styled from "styled-components"
import FilterField from "../components/FilterField"
import '../Assets/layouts.css'

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 10px;
    min-height: 20px;
`
const ColContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const styles = {
    inputContainer: {
        margin: '5%',
        width: '45%',
    }
}

const SetupBudgetPage = ({

}) => {
    const [mealBudget, setMealBudget] = useState(0)
    const [totalBudget, setTotalBudget] = useState(0)
    const [personCount, setPersonCount] = useState(0)

    return (
        <div style={{margin: 50, border: '1px solid green', padding: '3% 8%'}}>
        <h1>
            Set your Budget
        </h1>
        <RowContainer>
            <ColContainer style={styles.inputContainer}>
                <strong style={{marginBottom: '-1%', marginTop: '3%'}}>Meal Budget</strong>
                <RowContainer>
                    <Slider 
                        name="Meal Budget" 
                        onChange={e => setMealBudget(e.target.value)}
                        min={10}
                        max={2000}
                    /> 
                    <strong className="margin-2p"> £{mealBudget} </strong>
                </RowContainer>
                <strong style={{marginBottom: '-1%', marginTop: '3%'}}>Total Basket Budget</strong>
                <RowContainer>
                    <Slider name="Total Budget" 
                    onChange={e => setTotalBudget(e.target.value)}
                    min={10}
                    max={3000}
                    
                    /> <strong className="margin-2p"> £{totalBudget} </strong>
                </RowContainer>
                <strong style={{marginBottom: '-1%', marginTop: '3%'}}>Number of People</strong>
                <RowContainer>
                    <Slider name="Number of Persons"
                    
                    onChange={e => setPersonCount(e.target.value)}
                    min={1}
                    max={20}
                    
                    /> <strong className="margin-2p"> {personCount} </strong>
                </RowContainer>
                
            </ColContainer>

            <ColContainer style={{...styles.inputContainer, marginTop: 100}}>
                <FilterField 
                    style={{marginBottom: '15px'}}
                    data={[
                        'one', 'two', 'three'
                    ]}
                    label="Search Requirements"
                    placeholder={"Select Requirements..."}
                />

                <FilterField 
                    style={{marginBottom: '15px'}}
                    data={[
                        'one', 'two', 'three'
                    ]}
                    label="Must Include"
                    placeholder={"Select Requirements..."}
                />
                <FilterField 
                    style={{marginBottom: '15px'}}
                    data={[
                        'one', 'two', 'three'
                    ]}
                    label="Must Exclude"
                    placeholder={"Select Requirements..."}
                />
                
            </ColContainer>

        </RowContainer>
        <Stack flexDirection={'row-reverse'} style={{marginRight: 50}}>
            <Button style={{backgroundColor: 'green', color: 'white', paddingInline: 50, }}> Search </Button>
            <Button style={{ paddingInline: 50, border: '1px solid green', marginInline: 10}}> Reset </Button>
        </Stack>
        </div>
    )
}

export default SetupBudgetPage