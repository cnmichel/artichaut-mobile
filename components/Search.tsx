import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { Button, CalendarRange, IndexPath, RangeDatepicker, Select, SelectItem } from '@ui-kitten/components';

interface Props {
  mode: 'full' | 'compact',
  onSearch: (query: SearchQuery) => void
}

export interface SearchQuery {
  startDate: string,
  endDate: string,
  guestNumber: number
}

export const Search: React.FC<Props> = (props: Props) => {

  const { mode, onSearch } = props;

  const [dateRange, setDateRange] = useState<CalendarRange<any>>({startDate: '', endDate: ''});
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>();

  const [options] = useState([
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ])

  const handleSelect = (index: IndexPath | IndexPath[]) => {
    // @ts-ignore
    const { row } = index;
    setSelectedIndex(index);
    setSelectedValue(options[row].value)
  }

  const handleSearch = () => {
    const query = {
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      guestNumber: selectedValue
    }
    onSearch(query);
  }

  return (
    <BlurView style={styles.container}>
      <Select
        selectedIndex={selectedIndex}
        size="large"
        value={selectedValue}
        placeholder={<Ionicons color={'#AAA'} name="person" size={24} />}
        onSelect={(index) => handleSelect(index)}
      >
        {options.map((option) =>
          (<SelectItem title={option.label} key={option.value} />)
        )}
      </Select>
      <RangeDatepicker
        style={styles.datepicker}
        range={dateRange}
        size="large"
        placeholder={'Choisir une date'}
        onSelect={nextRange => setDateRange(nextRange)}
      />
      <Button
        style={styles.button}
        appearance='ghost'
        status='success'
        size="giant"
        accessoryLeft={<Ionicons color={'#00B561'} name="search" size={24} />}
        onPress={() => handleSearch()}
      />
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'space-between'
  },
  datepicker: {
    alignItems: 'center',
    backgroundColor: 'transparent !important'
  },
  button: {
    margin: 0,
  }
});