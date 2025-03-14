
import { useState, useEffect } from 'react';
import { telemedecineService } from '../services/telemedecineService';
import { educationService } from '../services/educationService';
import { economicService } from '../services/economicService';
import { waterService } from '../services/waterService';
import { civicService } from '../services/civicService';

// Type to represent the loading, error and data state
type ServiceResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

// Generic hook that can work with any service function that returns a Promise
export function useServiceData<T>(
  serviceFn: () => Promise<T>, 
  dependencies: any[] = []
): ServiceResult<T> {
  const [result, setResult] = useState<ServiceResult<T>>({
    data: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      setResult(prev => ({ ...prev, isLoading: true }));
      
      try {
        const data = await serviceFn();
        
        if (isMounted) {
          setResult({
            data,
            isLoading: false,
            error: null
          });
        }
      } catch (error) {
        if (isMounted) {
          setResult({
            data: null,
            isLoading: false,
            error: error instanceof Error ? error : new Error('An unknown error occurred')
          });
        }
      }
    };

    fetchData();
    
    return () => {
      isMounted = false;
    };
  }, dependencies);

  return result;
}

// Specific hooks for each service
export const useTelemedecineData = {
  useDoctors: () => useServiceData(telemedecineService.getDoctors),
  useDoctor: (id: number) => useServiceData(() => telemedecineService.getDoctorById(id), [id]),
  useAppointments: () => useServiceData(telemedecineService.getAppointments)
};

export const useEducationData = {
  useCourses: () => useServiceData(educationService.getCourses),
  useCourse: (id: number) => useServiceData(() => educationService.getCourseById(id), [id]),
  useCoursesByCategory: (category: string) => 
    useServiceData(() => educationService.getCoursesByCategory(category), [category])
};

export const useEconomicData = {
  useProducts: () => useServiceData(economicService.getProducts),
  useProduct: (id: number) => useServiceData(() => economicService.getProductById(id), [id]),
  useProductsByCategory: (category: string) => 
    useServiceData(() => economicService.getProductsByCategory(category), [category])
};

export const useWaterData = {
  useProjects: () => useServiceData(waterService.getWaterProjects),
  useProject: (id: number) => useServiceData(() => waterService.getWaterProjectById(id), [id]),
  useTips: (category?: 'household' | 'agriculture' | 'industry') => 
    useServiceData(() => waterService.getWaterTips(category), [category])
};

export const useCivicData = {
  useInitiatives: () => useServiceData(civicService.getInitiatives),
  useInitiative: (id: number) => useServiceData(() => civicService.getInitiativeById(id), [id]),
  useIssues: (status?: 'reported' | 'in_review' | 'in_progress' | 'resolved') => 
    useServiceData(() => civicService.getIssues(status), [status])
};
