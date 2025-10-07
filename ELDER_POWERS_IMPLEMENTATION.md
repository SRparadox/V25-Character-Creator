# Elder Powers and Methuselah Powers Implementation

## Summary

I have successfully implemented the Elder Powers and Methuselah Powers feature for the VTM 5 Character Creator as requested. Here's what has been added:

## Files Created/Modified

### 1. New Data File: `src/data/ElderPowers.ts`
- Defines `ElderPower` and `MethuselahPower` types
- Contains all 15 Elder Powers with descriptions and requirements
- Contains all 11 Methuselah Powers with descriptions and requirements

### 2. Updated Character Schema: `src/data/Character.ts`
- Added `isElder: boolean` field
- Added `isMethuselah: boolean` field  
- Added `selectedElderPowers: ElderPower[]` field
- Added `selectedMethuselahPowers: MethuselahPower[]` field
- Updated `getEmptyCharacter()` to initialize new fields

### 3. Updated Generation Picker: `src/generator/components/GenerationPicker.tsx`
- Extended generation options to include 4-5 (Methuselah generations)
- Automatically sets `isElder` and `isMethuselah` flags based on generation:
  - Generations 6-9: Elder only (NPC)
  - Generations 4-5: Methuselah (NPC) - automatically enables both Elder and Methuselah

### 4. New Age Picker Component: `src/generator/components/AgePicker.tsx`
- Allows manual selection of Elder and/or Methuselah powers
- Checkboxes are automatically enabled/disabled based on generation
- Methuselah generation (4-5) automatically enables both options
- Elder generation (6-9) allows Elder selection and optional Methuselah

### 5. New Elder Power Picker: `src/generator/components/ElderPowerPicker.tsx`
- Shows all 15 Elder Powers in scrollable card format
- Allows selection of up to 2 powers (or 4 if Methuselah is active)
- Shows power descriptions, requirements, and selection count
- Powers include requirements like "Celerity", "Protean", etc.

### 6. New Methuselah Power Picker: `src/generator/components/MethuselahPowerPicker.tsx`
- Shows all 11 Methuselah Powers in scrollable card format
- Allows selection of up to 2 powers
- Shows power descriptions and requirements
- Only appears when `isMethuselah` is true

### 7. Updated Generator Flow: `src/generator/Generator.tsx`
- Added new steps to the generation flow:
  - Generation → Age → Elder Powers (if applicable) → Methuselah Powers (if applicable) → Continue...
- Updated `getStepLabels()` to include new steps dynamically
- Updated step array to include new components conditionally

### 8. Updated PDF Creator: `src/generator/pdfCreator.ts`
- Elder and Methuselah powers are automatically added to the Notes section
- Format: Power name, description, and requirements (if any)
- Clearly labeled sections for "ELDER POWERS" and "METHUSELAH POWERS"

## Power Selection Logic

### Elder Powers (15 total):
- **Selection Limit**: 2 powers (4 if Methuselah)
- **Availability**: Generations 6-9 (Elder) or 4-5 (Methuselah)
- **Notable Powers**: 
  - Affect the Masses (any discipline power affects multiple targets)
  - Between the Ticks (Celerity multi-action)
  - Miles in the Mind (extended range for powers)
  - Pulse of the City (Presence city-wide emotion)

### Methuselah Powers (11 total):
- **Selection Limit**: 2 powers
- **Availability**: Generations 4-5 only
- **Notable Powers**:
  - Insect Plague (Animalism biblical plague)
  - Eyes of the Sun (Auspex cursed sight)
  - Vortex of Blood (Blood Sorcery area drain)
  - Unavoidable Hunter (Celerity teleportation)

## Flow Implementation

The new flow follows the requested layout:

1. **Generations** - Updated to include 4-5 generation options
2. **Age** - New page with checkboxes for Elder/Methuselah powers
3. **Elder Powers** - Shown only if Elder or Methuselah is selected
4. **Methuselah Powers** - Shown only if Methuselah is selected
5. **Continue** - Proceeds to Predator Type as normal

## PDF Integration

As requested, all Elder and Methuselah powers are added to the Notes section of the character sheet rather than being mixed with regular Disciplines. The format is clean and organized with clear headers and bullet points.

## Testing

The implementation has been tested for:
- ✅ TypeScript compilation
- ✅ Component rendering
- ✅ Data flow between components
- ✅ PDF generation with powers in notes
- ✅ Conditional step display
- ✅ Selection limits and validation

All components are fully functional and integrate seamlessly with the existing character creation flow.