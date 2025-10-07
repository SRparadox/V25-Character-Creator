import { Aside, Center, ScrollArea, Stepper } from "@mantine/core"
import { Character } from "../data/Character"
import { globals } from "../globals"
import { getStepLabels } from "../generator/Generator"

export type AsideBarProps = {
    selectedStep: number
    setSelectedStep: (step: number) => void
    character: Character
}

const AsideBar = ({ selectedStep, setSelectedStep, character }: AsideBarProps) => {
    // Use the same step labels as the Generator for consistency
    const stepLabels = getStepLabels(character)
    
    // Simple accessibility logic - allow navigation to completed steps and next step
    const isStepAccessible = (stepIndex: number) => {
        // Always allow going back to previous steps
        if (stepIndex <= selectedStep) return true
        
        // Allow going to the next step
        if (stepIndex === selectedStep + 1) return true
        
        // Basic completion check for major steps
        const hasBasicInfo = character.clan && character.sect && character.generation > 0
        if (hasBasicInfo && stepIndex > 6) return true // After generation step
        
        return false
    }

    const getStepper = () => {
        return (
            <Stepper
                color="grape"
                orientation="vertical"
                active={selectedStep}
                onStepClick={(x) => {
                    setSelectedStep(x)
                }}
                breakpoint="sm"
            >
                {stepLabels.map((label, index) => {
                    return (
                        <Stepper.Step
                            key={label}
                            label={label}
                            description=""
                            disabled={!isStepAccessible(index)}
                        >
                            {" "}
                        </Stepper.Step>
                    )
                })}
            </Stepper>
        )
    }

    const height = globals.viewportHeightPx
    const scrollerHeight = 940
    return (
        <Aside p="md" hiddenBreakpoint="sm" width={{ xs: 200 }} style={{ zIndex: 0 }}>
            <Center h={"100%"}>
                {height <= scrollerHeight ? <ScrollArea h={height - 100}>{getStepper()}</ScrollArea> : <>{getStepper()}</>}
            </Center>
        </Aside>
    )
}

export default AsideBar
