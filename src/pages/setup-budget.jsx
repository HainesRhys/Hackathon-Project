import { Button, Slider, Stack, TextField } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import FilterField from "../Components/FilterField"
import '../Assets/layouts.css'
import { limits, SearchTags } from "../configs/budget-config"
import Header from "../Components/Header/Header"
import { customHistory } from "../Components/RootNavigation"

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
    
    const [searchTags, setSearchTags] = useState([])
    const [mustInclude, setMustInclude] = useState([])
    const [mustExclude, setMustExclude] = useState([])

    let mustIncludeSetter, mustExcludeSetter, searchTagSetter;

    const resetFields = e => {
        setMealBudget(0)
        setTotalBudget(0)
        setPersonCount(0)

        setSearchTags([])
        setMustExclude([])
        setMustInclude([])
    }

    return (
        <>
        <Header />
        <div style={{margin: 50, marginTop: 150, border: '1px solid green', padding: '2% 5%'}}>
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
                        min={limits.mealBudget.min}
                        max={limits.mealBudget.max}
                        value={mealBudget}
                    /> 
                    <strong className="margin-2p"> £{mealBudget} </strong>
                </RowContainer>
                <strong style={{marginBottom: '-1%', marginTop: '3%'}}>Total Basket Budget</strong>
                <RowContainer>
                    <Slider name="Total Budget" 
                    onChange={e => setTotalBudget(e.target.value)}
                    min={limits.totalBudget.min}
                    max={limits.totalBudget.max}
                    value={totalBudget}
                    
                    
                    /> <strong className="margin-2p"> £{totalBudget} </strong>
                </RowContainer>
                <strong style={{marginBottom: '-1%', marginTop: '3%'}}>Number of People</strong>
                <RowContainer>
                    <Slider name="Number of Persons"
                    
                    onChange={e => setPersonCount(e.target.value)}
                    min={limits.personCount.min}
                    max={limits.personCount.max}
                    value={personCount}
                    
                    /> <strong className="margin-2p"> {personCount} </strong>
                </RowContainer>
                
            </ColContainer>

            <ColContainer style={{...styles.inputContainer, marginTop: 100}}>
                <FilterField 
                    style={{marginBottom: '15px'}}
                    data={SearchTags}
                    label="Search Requirements"
                    placeholder={"Select Requirements..."}
                    onChange={e => setSearchTags(e)}
                    value={searchTags}
                />

                <FilterField 
                    style={{marginBottom: '15px'}}
                    data={SearchTags}
                    label="Must Include"
                    placeholder={"Select Requirements..."}
                    onChange={e => setMustInclude(e)}
                    value={mustInclude}
                />
                <FilterField 
                    style={{marginBottom: '15px'}}
                    data={SearchTags}
                    label="Must Exclude"
                    placeholder={"Select Requirements..."}
                    onChange={e => setMustExclude(e)}
                    value={mustExclude}
                />
                
            </ColContainer>

        </RowContainer>
        <Stack flexDirection={'row-reverse'} style={{marginRight: 50}}>
            <Button style={{backgroundColor: 'green', color: 'white', paddingInline: 50, }} onClick={() => customHistory.push('/Results')}> Search </Button>
            <Button style={{ paddingInline: 50, border: '1px solid green', marginInline: 10}} onClick={resetFields}> Reset </Button>
        </Stack>
        </div>
        </>
    )
}

export default SetupBudgetPage